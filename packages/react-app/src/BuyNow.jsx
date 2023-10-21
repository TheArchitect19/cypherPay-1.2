import React from 'react';
import { Link } from 'react-router-dom';

const BuyNow = () => {
  return (
    <div>
      <h1>Hellllo</h1>
      <h1>Buy Now</h1>
      <Link to="/payment-options">Select Payment Option</Link>
    </div>
  );
};

export default BuyNow;