
import './App.css';
import { useEffect } from 'react';

import { init } from './Web3Client';
import Header from './components/Header';
import {MoralisProvider } from "react-moralis"
import RegisterEmployee from './components/RegisterEmployee';
import {NotificationProvider} from "web3uikit"





function App() {

  const provideUrl = process.env.REACT_APP_PROVIDE_URL;

  useEffect(()=>{

   init();
    

  },[])
  





  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
      <div className="App">
      <Header/>
      <RegisterEmployee/>
    </div>s
      </NotificationProvider>

    </MoralisProvider>
    
  );
}

export default App;
