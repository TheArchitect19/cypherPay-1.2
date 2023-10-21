import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentOptions.css';

const PaymentOptions = () => {
  const paymentMethods = [
    { name: 'Pay with UPI', method: 'upi' },
    { name: 'Pay with Credit Card', method: 'credit-card' },
    { name: 'Pay with Debit Card', method: 'debit-card' },
    { name: 'Pay with CipherPay', method: 'cipherpay' },
    { name: "Swap Tokens", method: "swap-tokens"},
  ];

  return (
    <div className="payment-container">
    <div className="payment-options-container">
        <div className="payment-methods">
          <h2 className='card-heading'>Select Payment Method</h2>
          <ul className='List'>
            {paymentMethods.map((option, index) => (
              <li className="Item" key={index}>
                <Link style={{color:"white"}} to={`/payment/${option.method}`}>{option.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-details" >
          <h2 className='card-heading'>Card Details</h2>
              <div className="form">
              <form action="" style={{width:"100%"}}>
                <label htmlFor="CardDetails">Card Number</label><br />
                <input type="text" name='CardDetails'/><br />
                <label htmlFor="Expiry">Expiry</label><br />
                <input type="text" name='Expiry'/><br />
                <label htmlFor="CVV">CVV</label><br />
                <input type="text" name='CVV'/><br />
                <button className='btn-grad' style={{width:"90%", height:"9vh", background:"aquamarine", fontWeight:"600", color:"black"}}>Pay</button>
              </form>

              </div>
        </div>
    </div>
    </div>
      
  );
};

export default PaymentOptions;