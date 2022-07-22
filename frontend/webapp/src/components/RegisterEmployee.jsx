import {abi,contractAddresses} from '../constants';
import {useNotification} from 'web3uikit';
import {useMoralis, useWeb3Contract} from "react-moralis"
import React, { useContext, useEffect, useState } from 'react'
import FormPage from "./Forms";
import { TransactionContext } from '../context/TransactionContext';
import { AiFillPlayCircle } from "react-icons/ai";

function RegisterEmployee() {

  const {ethereum} = window;
  const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

//   const [numEmployees, setNumEmployees] = useState(0)
//   const dispatch = useNotification()
//   const {chainId: chainIdHex,isWeb3Enabled } =useMoralis()
//   const chainId = parseInt(chainIdHex)
//   const refundAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
//   console.log(parseInt(chainIdHex))

// const {runContractFunction: createEmployee}= useWeb3Contract({
//     abi:abi,
//     contractAddress:refundAddress,
//     functionName:"createEmployee",
//     // params:{
//     //   address:"0x2e66bdba0b02f23F6faf8f85602c4a3b8870C829",
//     //   fullName:"ermi",
//     //   lat:8,
//     //   lon:9,
//     //   range:7},
//    params:{}
// })
// const {runContractFunction: say}= useWeb3Contract({
//   abi:abi,
//   contractAddress:refundAddress,
//   functionName:"say",
 
// })
// const {runContractFunction: getEmployees}= useWeb3Contract({
//     abi:abi,
//     contractAddress:refundAddress,
//     functionName:"getEmployees",
//     params:{}
   
// })

// const handleNewNotification = function () {
//   dispatch({
//     type:"info",
//     message:"Transaction completed",
//     title: "Transaction Notification",
//     position:"topR",
//     icon:"bell",

//   })

// }
// const handleSuccess = async function (tx){
//   await tx.wait(1)
//   handleNewNotification(tx)
//   updateUI()
// }

// async function updateUI(){
//   const sayHi = await say()
//   console.log(sayHi)
//   //  const crt =await createEmployee()
//   // console.log("creating an employe...",crt)
//   // const numEmployeesFromCall=(await  getEmployees())
//   // console.log(numEmployees)
//   // setNumEmployees(numEmployeesFromCall);

// }

// useEffect(()=>{
//   if(isWeb3Enabled){
    
//     updateUI()
//   }
// },[isWeb3Enabled])

const { connectWallet, currentAccount , formData, handleChange,sendTransaction } = useContext(TransactionContext);
const handleSubmit=()=>{
  const {employeeName,address,allowedRange}= formData;
  e.preverntDefault();

  if(!employeeName || !address || !allowedRange) return;

  sendTransaction()
}
const Loader = () => (
  <div className="flex justify-center items-center py-3">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700" />
  </div>
);



  return (
    <div>
        
          <button onClick={connectWallet}></button>
          <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Register <br /> Employee
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          {/* <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div> */}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Employee Name" name="employeeName" type="text" handleChange={handleChange} />
            <Input placeholder="Address" name="Address" type="number" handleChange={handleChange} />
            <Input placeholder="Range" name="allowedRange" type="number" handleChange={handleChange} />
            

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {currentAccount
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                 Register
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
       
        

    </div>
  )
}

export default RegisterEmployee