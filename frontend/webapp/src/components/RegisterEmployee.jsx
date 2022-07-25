import {abi,contractAddresses} from '../constants';

import React, { useContext, useEffect, useState } from 'react'

import { TransactionContext } from '../context/TransactionContext';
import { AiFillPlayCircle } from "react-icons/ai";

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

function RegisterEmployee() {

  const {ethereum} = window;
  

const { connectWallet, currentAccount , formData, handleChange,sendTransaction,isLoading } = useContext(TransactionContext);
const handleSubmit=(e)=>{
  const {employeeName,address,allowedRange}= formData;
  e.preventDefault();

  if(!employeeName || !address || !allowedRange) return;

  sendTransaction()
}
const Loader = () => (
  <div className="flex justify-center items-center py-3">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700" />
  </div>
);

console.log(currentAccount);

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
      
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            
            <Input placeholder="Employee Name"  name="employeeName" type="text" handleChange={handleChange} />
            <Input placeholder="Address" name="address"  type="text" handleChange={handleChange} />
            <Input placeholder="Range" name="allowedRange" type="number" handleChange={handleChange} />
            

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            
            {!isLoading
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