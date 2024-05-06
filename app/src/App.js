import React from 'react'
import InvestMain from './components/Home/InvestSection/InvestMain'
import HomePage from './components/Home'
import { WalletConnectProvider } from "./components/common/WalletConnectProvider";

const App = () => {
  return (
    <>
      <WalletConnectProvider>
        <HomePage />
      </WalletConnectProvider>      
    </>
  )
}

export default App