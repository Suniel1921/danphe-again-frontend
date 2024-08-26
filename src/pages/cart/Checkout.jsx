import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import '../cart/checkout.css';
import CartCard from '../cart/CartCard'


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/create-payment-intent`,
                { amount: 1000 },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const { clientSecret } = response.data;

            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardNumberElement,
                    billing_details: {
                        // You can collect billing details here if needed
                    },
                },
            });

            if (paymentResult.error) {
                setError(paymentResult.error.message);
                setSuccess(false);
            } else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    setSuccess(true);
                    setError(null);
                }
            }
        } catch (error) {
            setError(error.response ? error.response.data.error : error.message);
        }

        setLoading(false);
    };

    return (
        <form className="payment-form" onSubmit={handleSubmit}>
            <h4 className="form-title">Enter Your Payment Details</h4>
            <div className="card-number-wrapper">
                <label htmlFor="cardNumber">Card Number</label>
                <CardNumberElement className="card-element" id="cardNumber" />
            </div>
            <div className="card-expiry-cvc-wrapper">
                <div className="card-expiry-wrapper">
                    <label htmlFor="cardExpiry">Expiry Date</label>
                    <CardExpiryElement className="card-element" id="cardExpiry" />
                </div>
                <div className="card-cvc-wrapper">
                    <label htmlFor="cardCvc">CVV</label>
                    <CardCvcElement className="card-element" id="cardCvc" />
                </div>
            </div>
            <button className="submit-button" type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Payment succeeded!</div>}
        </form>
    );
};

const Checkout = () => {
    return (
        <div className="checkout-container">
            <h3 className="checkout-title">Welcome to the Payment Page</h3>
            <Elements stripe={stripePromise}>
               <div style={{display: 'flex'}}>
               <CheckoutForm />
               <CartCard/>
               </div>
            </Elements>
        </div>
    );
};

export default Checkout;





