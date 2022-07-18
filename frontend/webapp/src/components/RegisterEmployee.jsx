import { useMoralis, useWeb3Contract } from "react-moralis";
import {abi,contractAddresses} from '../constants';
import {useNotification} from 'web3uikit';

import React from 'react'

function RegisterEmployee() {
  const dispatch = useNotification()
    const {chainId: chainIdHex } =useMoralis()
    const chainId = parseInt(chainIdHex)
    const refundAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    console.log(parseInt(chainIdHex))

const {runContractFunction: createEmployee}= useWeb3Contract({
    abi:abi,
    contractAddress:refundAddress,
    functionName:createEmployee,
    params:{0x2e66bdba0b02f23F6faf8f85602c4a3b8870C829,},
   
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



  return (
    <div>
        <h1>Register Employee</h1>
    </div>
  )
}

export default RegisterEmployee