import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentOptions.css';
import Card from './Card';
import PaymentDetails from './PaymentDetails';
import CypherPay from './CypherPay';

const PaymentOptions = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const paymentMethods = [
    { name: 'Pay with Credit Card', method: 'credit-card' },
    { name: 'Pay with Debit Card', method: 'debit-card' },
    { name: 'Pay with CypherPay', method: 'cipherpay' },
  ];
  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };
  return (
    <div className="payment-container">
    <div className="payment-options-container">
        <div className="payment-methods">
          <h2 className='card-heading' style={{color:"white"}}>Select Payment Method</h2>
          <ul className='List'>
            {paymentMethods.map((option, index) => (
              <li className="Item" key={index}>
                <button
                  style={{ color: "white", background: "transparent", border: "none", cursor: "pointer" }}
                  onClick={() => handleMethodClick(option.method)}
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-details" >
        {selectedMethod === 'credit-card' || selectedMethod === 'debit-card' ? (
            <Card />
          ) : selectedMethod === 'cipherpay' ? (
            <CypherPay />
          ): selectedMethod === 'swap-tokens' ? (
            navigate("/payment/swap-tokens")
          ) : (
            <PaymentDetails />
          )
        }
          
        </div>
    </div>
    </div>
      
  );
};

export default PaymentOptions;