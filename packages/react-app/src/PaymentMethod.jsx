import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentMethod = () => {
  const { method } = useParams();

  return (
    <div>
      <h2>Payment with {method}</h2>
    </div>
  );
};

export default PaymentMethod;