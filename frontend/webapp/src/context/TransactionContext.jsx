import React ,{useEffect,useState} from 'react';
import {ethers} from 'ethers';
import { abi, contractAddresses } from '../constants';
export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddresses, abi, signer);


}
export const TransactionProvider = ({ children }) => {

const [currentAccount, setCurrentAccount] =useState('');
const [formData, setFormData] = useState({employeeName:'',address:'', allowedRange:''})


const handleChange=(e,name)=>{
    setFormData((prevState) =>({...prevState, [name]:e.target.value}))
}
   

const checkIfWalletIsConnected = async () => {

 
    try {
        if (!ethereum) return alert("Please install MetaMask.");
  
        // const accounts = await ethereum.request({ method: "eth_accounts" });
  
        if (accounts.length) {
          setCurrentAccount(accounts[0]);
  
        //   getAllTransactions();
        } else {
        //   console.log("No accounts found");
        }
      } catch (error) {
        
      }
    
}

const connectWallet = async () => {
    try {
        if(!ethereum) return alert("Please install metamask");
const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        setCurrentAccount(accounts[0]);
    } catch (error){
        // console.log(error);
        
    }
}

const sendTransaction = async () =>{
    try {
        if(!ethereum) return alert("please install metamask");
        const {employeeName,address,allowedRange}= formData;




    } catch (err) {
        
        throw new Error("No ethereum object")
        
    }
}





useEffect(()=> {
  checkIfWalletIsConnected();

},[]);
    return (
        <TransactionContext.Provider value={{ connectWallet , currentAccount, formData, handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    );

}