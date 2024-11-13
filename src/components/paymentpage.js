import React from 'react';
import axios from 'axios';

const PaymentPage = ({ amount }) => {
  const handlePayment = () => {
    axios.post('/api/payment', { amount })
      .then(response => alert('Payment Successful'))
      .catch(error => console.error('Payment Error', error));
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Amount Due: Ksh {amount}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
