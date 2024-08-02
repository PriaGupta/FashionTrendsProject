
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51P5mKPSEFRUjdkkG5runJr90Ngi9h8kbS6VX5S4laphNpEZC6cHVxsW6yAWPiuywPaLm47CQTTOo6WQBNBsaJbDc00r16IQLm4');

const Pay = () => {

  
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Pay;
