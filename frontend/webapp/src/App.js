import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");
console.log("f",web3)

function App() {

  const provideUrl = process.env.REACT_APP_PROVIDE_URL;
  





  return (
    <div className="App">
      
    </div>
  );
}

export default App;
