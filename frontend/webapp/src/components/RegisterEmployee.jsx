import { useMoralis, useWeb3Contract } from "react-moralis";
import {abi,contractAddresses} from '../constants'

import React from 'react'

function RegisterEmployee() {

    const {chainId: chainIdHex } =useMoralis()
    const chainId = parseInt(chainIdHex)
    const refundAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    console.log(parseInt(chainIdHex))

// const {runContractFunction: enterRaffle}= useWeb3Contract({
//     abi:,
//     contractAddress:,
//     functionName:,
//     params:{},
//     msgValue:
// })



  return (
    <div>
        <h1>Register Employee</h1>
    </div>
  )
}

export default RegisterEmployee