import React, { useState } from "react";
import "./App.css";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3-eth";
import OldVersion from "./OldVersion";
import NewVersion from "./NewVersion";

function App() {
  const [oldVersion, setOldVersion] = useState(false);
  const [newVersion, setNewVersion] = useState(false);

  const handleOldVersion = () => {
    setOldVersion(true)
  }

  const handleNewVersion = () => {
    setNewVersion(true);
  }

  return (
    <div className="App">
      {!oldVersion && !newVersion && (
      <div>
        <button onClick={handleOldVersion}>Old Version</button>
        <button onClick={handleNewVersion}>New Version</button>
      </div>
      )}
      {oldVersion &&
        <OldVersion/>
      }
      {newVersion && 
        <NewVersion/>}
    </div>
  );
}

export default App;
