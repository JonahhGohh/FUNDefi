// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from './App'
// import './App.css'

// import Web3 from 'web3'
// import { Web3ReactProvider } from "@web3-react/core";
// import { MetaMaskProvider } from "./hooks/metamask";

// import 'bootstrap/dist/css/bootstrap.min.css'

// import { Button } from "react-bootstrap";
// import useMetaMask from "./hooks/metamask";

// function getLibrary(provider, connector){
//     return new Web3(provider)
// }

// ReactDOM.render(
// <React.StrictMode>
//   <Web3ReactProvider> getLibrary={getLibrary}
//     <MetaMaskProvider>
//         <ConnectWallet/>
//     </MetaMaskProvider>
//     </Web3ReactProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


// function ConnectWallet() {
//     const {connect, disconnect, isActive, account} = useMetaMask()

//     return (
//         <div className="Wallet">
//             <header className="App-Wallet">
//                 <Button variant="secondary" onClick={connect}>
//                     <img src="images/metamask.svg" alt="MetaMask" width="50" height="50"/> Connect to metamask
//                 </Button>
//                 <div className="mt-2 mb-2">
//                     Connected Account: {isActive?account:''}
//                 </div>
//                 <Button variant="danger" onClick={disconnect}>
//                     Disconnect  Metamask<img src="images/metamask.svg" alt="MetaMask" width="50" height="50"/>
//                 </Button>
//             </header>
//         </div >
//     )
// }

// export default ConnectWallet;