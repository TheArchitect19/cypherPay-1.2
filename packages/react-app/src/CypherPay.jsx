import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "./assets/logo.png";
const CypherPay = () => {
    const [connected, setConnected] = React.useState(false);
    const [buttonText, setButtonText] = React.useState("Connect to MetaMask");
    const connectToMetaMask = async () => {
        try {
            
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setConnected(true);
            setButtonText("Connected")
            console.log('Connected MetaMask Account:', accounts[0]);

            setTimeout(() => {
                setButtonText(`Pay ${999*0.00062} ETH`);
            }, 2000);
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
      };
  return (
    <div>
        <h2 className='card-heading'>Pay With Crypto</h2>
        <div className="details-container">
            <div className="rows" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <img src={Logo} style={{height:"10%", width:"22%"}} alt="" />
            </div>
            <div className="rows">
                <span>Product Name: </span>
                <span>Ola Electric Scooter</span>
            </div>
            <div className="rows">
                <span>Product Price: </span>
                <span>{999*0.00062} ETH</span>
            </div>
            <button onClick={connectToMetaMask} className='btn-grad' style={{width:"90%", height:"8vh",background:"#e8006f", color: "white", display:"flex", alignItems:"center", justifyContent:"center",fontWeight:"600", fontSize:"1.2rem", color:"white"}}> {buttonText} </button>
            <hr />
            <Link to="/payment/swap-tokens" className='btn-grad' style={{width:"90%", height:"8vh",background:"aquamarine", color: "white", display:"flex", alignItems:"center", justifyContent:"center",fontWeight:"600", fontSize:"1.2rem"}}>
                    Optimal Pay
                </Link>

        </div>
    </div>
  )
}

export default CypherPay
