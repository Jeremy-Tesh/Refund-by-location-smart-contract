
import './App.css';
import { useEffect } from 'react';

import { init } from './Web3Client';
import Header from './components/Header';
import {MoralisProvider } from "react-moralis"
import RegisterEmployee from './components/RegisterEmployee';





function App() {

  const provideUrl = process.env.REACT_APP_PROVIDE_URL;

  useEffect(()=>{

   init();
    

  },[])
  





  return (
    <MoralisProvider initializeOnMount={false}>
      <div className="App">
      <Header/>
      <RegisterEmployee/>
    </div>

    </MoralisProvider>
    
  );
}

export default App;
