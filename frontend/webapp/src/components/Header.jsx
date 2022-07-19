import React from 'react'
import {ConnectButton} from "web3uikit"

function Header() {
  return (
    <div>
        <h1>Admin Dashboard</h1>
        <ConnectButton />
    </div>
  )
}

export default Header