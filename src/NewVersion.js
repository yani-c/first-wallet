import React, { useState } from "react";
import Web3 from "web3-eth";

function NewVersion() {
  const [account, setAccount] = useState();
  const [web3, setWeb3] = useState();
  const [amount, setAmount] = useState();
  const [donated, setDonated] = useState(false);

  const handleConnect = async () => {
    const web = new Web3(Web3.givenProvider);
    const accounts = await web.requestAccounts();
    setAccount(accounts[0]);
    console.log("aca accounts", accounts);
    setWeb3(web);
  };

  const handleDonate = () => {
    web3
      .sendTransaction({
        from: account,
        to: "0x5E18019cad31Ac7F3AEDDa87B89b3ea7aD3D4684",
        value: amount,
      })
      .then(() => setDonated(true))
      .catch((e) => console.log(e));
  };

  const handleChange = (e) => {
    setAmount(e.amount);
  };

  return (
    <div className="containerButtons">
      {!account ? (
        <button className="button" onClick={handleConnect}>
          Connect Metamask account
        </button>
      ) : donated ? (
        <h1 className="text">Thanks!</h1>
      ) : (
        <div className="donateContainer">
          <h1 className="text">Donate here</h1>
          <div className="donateBox">
            <input
              className="input"
              type="text"
              inputmode="numeric"
              name="amount"
              value={amount}
              onChange={handleChange}
            />
            <button className="button donateButton" onClick={handleDonate}>
              Donate!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewVersion;
