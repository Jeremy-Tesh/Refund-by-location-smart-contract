import './App.css';
import { useEffect } from 'react';
import { init } from './Web3Client';

import {MoralisProvider } from "react-moralis"
import RegisterEmployee from './components/RegisterEmployee';
import {NotificationProvider} from "web3uikit"
import Navbar from './components/NavBar';





function App() {



return (
    
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
      <div className="bg-slate-700">
        
        <Navbar/>
      
      <RegisterEmployee/>
    </div>
      </NotificationProvider>

    </MoralisProvider>
    
  );
}

export default App;
