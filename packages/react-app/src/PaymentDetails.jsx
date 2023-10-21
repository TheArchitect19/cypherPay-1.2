import React from 'react'
import Ola from "./assets/olaa.png";
const PaymentDetails = () => {
  return (
    <div>
        <h2 className='card-heading'>Payment Details</h2>
        <div className="details-container">
            <div className="rows" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <img src={Ola} style={{height:"10%", width:"30%"}} alt="" />
            </div>
            <div className="rows">
                <span>Product Name: </span>
                <span>Ola Electric Scooter</span>
            </div>
            <div className="rows">
                <span>Product Price: </span>
                <span>$999</span>
            </div>
            <button className='btn-grad' style={{width:"90%", height:"10vh", background:"#e8006f", color: "white", fontWeight:"600", color:"white"}}>Pay $999 </button>

        </div>
    </div>
  )
}

export default PaymentDetails
