import React ,{useEffect,useState} from 'react';
import {ethers} from 'ethers';
import { abi, contractAddresses } from '../constants';
export const TransactionContext = React.createContext();
// require('dotenv').config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey); 

//export const helloWorldContract;

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddresses, abi, signer);

 return transactionContract;
}
export const TransactionProvider = ({ children }) => {

const [currentAccount, setCurrentAccount] = useState("");
const [formData, setFormData] = useState({employeeName:'',address:'', allowedRange:''})
const [isLoading, setIsLoading] =useState('false');



const handleChange=(e,name)=>{
    setFormData((prevState) =>({...prevState, [name]:e.target.value}))
}
   

const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("ff",currentAccount)
        console.log(isLoading)
        // getAllTransactions();
      } else {
        console.log("No accounts found");

      }
    } catch (error) {
      console.log(error);
    }
  };

const connectWallet = async () => {
    try {
        if(!ethereum) return alert("Please install metamask");
const accounts = await ethereum.request({method: 'eth_requestAccounts'});
       setCurrentAccount(accounts[0]);
       console.log("ff",currentAccount)
       window.location.reload();
        
    } catch (error){
       
        
    }
}

const sendTransaction = async () =>{
    try {
        if(!ethereum) return alert("please install metamask");
        const {employeeName,address,allowedRange}= formData;
        const transactionContract = getEthereumContract();
       
        // await ethereum.request({
        //     method: 'eth_sendTransaction'
        // })
       

     const transactionHash = await  transactionContract.createEmployee(address,employeeName,allowedRange,allowedRange,allowedRange)

        setIsLoading(true);
      
        await transactionHash.wait()
        
        setIsLoading(false);
        console.log(`Success -${transactionHash}`)


    } catch (err) {
        console.log(err)
        throw new Error("No ethereum object")
        
    }
}





useEffect(()=> {
   
  checkIfWalletIsConnect();

},[]);
    return (
        <TransactionContext.Provider value={{ connectWallet , currentAccount, formData, handleChange,sendTransaction ,isLoading}}>
            {children}
        </TransactionContext.Provider>
    );

}