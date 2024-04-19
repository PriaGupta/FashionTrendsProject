import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './styles.css'; 

const PaymentForm = () => {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    setPaymentLoading(false);
    if (error) {
      console.error('Error creating payment method:', error);
      setErrorMessage(error.message);
    } else {
      console.log('Payment method created:', paymentMethod);
      // You can now send the paymentMethod.id to your server to complete the payment
      setShowSuccessMessage(true);

      cardElement.clear();
    }
  };

  return (
    <div className="payment-container">
      <CardElement className="card-element" />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button className="paymentbtn" type="submit" disabled={isPaymentLoading} onClick={payMoney}>
        {isPaymentLoading ? 'Processing...' : 'Pay'}
      </button>
      {showSuccessMessage && (
        <div className="success-message">
          Payment successful! Thank you for your purchase.
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
