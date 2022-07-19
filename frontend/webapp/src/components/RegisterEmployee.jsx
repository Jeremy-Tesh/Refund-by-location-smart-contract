import {abi,contractAddresses} from '../constants';
import {useNotification} from 'web3uikit';
import {useMoralis, useWeb3Contract} from "react-moralis"
import React, { useEffect, useState } from 'react'

import FormPage from "./Forms";

function RegisterEmployee() {

  const [numEmployees, setNumEmployees] = useState(0)
  const dispatch = useNotification()
  const {chainId: chainIdHex,isWeb3Enabled } =useMoralis()
  const chainId = parseInt(chainIdHex)
  const refundAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
  console.log(parseInt(chainIdHex))

const {runContractFunction: createEmployee}= useWeb3Contract({
    abi:abi,
    contractAddress:refundAddress,
    functionName:"createEmployee",
    // params:{
    //   address:"0x2e66bdba0b02f23F6faf8f85602c4a3b8870C829",
    //   fullName:"ermi",
    //   lat:8,
    //   lon:9,
    //   range:7},
   params:{}
})
const {runContractFunction: say}= useWeb3Contract({
  abi:abi,
  contractAddress:refundAddress,
  functionName:"say",
 
})
const {runContractFunction: getEmployees}= useWeb3Contract({
    abi:abi,
    contractAddress:refundAddress,
    functionName:"getEmployees",
    params:{}
   
})

const handleNewNotification = function () {
  dispatch({
    type:"info",
    message:"Transaction completed",
    title: "Transaction Notification",
    position:"topR",
    icon:"bell",

  })

}
const handleSuccess = async function (tx){
  await tx.wait(1)
  handleNewNotification(tx)
  updateUI()
}

async function updateUI(){
  const sayHi = await say()
  console.log(sayHi)
   const crt =await createEmployee()
  console.log("creating an employe...",crt)
  const numEmployeesFromCall=(await  getEmployees())
  console.log(numEmployees)
  setNumEmployees(numEmployeesFromCall);
}

useEffect(()=>{
  if(isWeb3Enabled){
    
    updateUI()
  }
},[isWeb3Enabled])



  return (
    <div>
        <h1 className="text-red-400 pt-11">Register Employee {numEmployees[0]}</h1>
        <div className="border-solid border-red-500 border-2 mt-10">
        <FormPage/>
        </div>
        

    </div>
  )
}

export default RegisterEmployee