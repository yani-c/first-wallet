import React from "react";
import "./App.css";
import detectEthereumProvider from "@metamask/detect-provider";

function OldVersion() {
  const [connected, setConnected] = React.useState(false);
  const [p, setP] = React.useState();
  const [currentAccount, setCurrentAccount] = React.useState();

  async function handleMetamask() {
    const provider = await detectEthereumProvider();
    if (provider) {
      setConnected(provider.isConnected());
      console.log(provider);
      setP(provider);
    } else {
      console.log("Please install MetaMask!");
    }
  }

  function handleGetCurrentAccount(accounts) {
    console.log(accounts);
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else {
      setCurrentAccount(accounts[0]);
    }
  }

  function handleAccount() {
    if (p.isConnected()) {
      p.request({ method: "eth_requestAccounts" })
        .then(handleGetCurrentAccount)
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <div className="App">
      {!connected && <button onClick={handleMetamask}>Connect Metamask</button>}
      {connected && !currentAccount && (
        <div>
          <h1>Connected!</h1>
          <button onClick={handleAccount}>Connect account</button>
        </div>
      )}
      {currentAccount && <h1>Account connected</h1>}
    </div>
  );
}

export default OldVersion;
