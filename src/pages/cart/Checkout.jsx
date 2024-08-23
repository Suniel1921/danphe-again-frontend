// import React from 'react'

// const Checkout = () => {
//   return (
//     <>
//     <div className="checkoutContainer">
//         <div className="container">
//             <h3>welcome to the checkout page</h3>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default Checkout





// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// // Load your publishable key from Stripe
// const stripePromise = loadStripe('pk_test_51PqoUQ08Ir5euo8TQhNGdf2gt62ZqbCQJvM2lN6D2lBIC1EhF7BtqkvQroNoUO111lzIrXwUO3Jvjh2sI57yJY5H00jnHYbfFE'); // Replace with your actual Stripe Publishable Key

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [succeeded, setSucceeded] = useState(false);
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [clientSecret, setClientSecret] = useState('');

//   useEffect(() => {
//     // Create PaymentIntent when the component mounts
//     // const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/login`, values);
//     axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/create-payment-intent`, { amount: 1000 }) 

//       .then(res => {
//         setClientSecret(res.data.clientSecret);
//       });
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (payload.error) {
//       setError(`Payment failed: ${payload.error.message}`);
//       setProcessing(false);
//     } else {
//       setError(null);
//       setSucceeded(true);
//       setProcessing(false);
//     }
//   };

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>
//       <CardElement id="card-element" />
//       <button disabled={processing || !stripe || !elements} id="submit">
//         {processing ? "Processing..." : "Pay Now"}
//       </button>
//       {error && <div>{error}</div>}
//       {succeeded && <div>Payment succeeded!</div>}
//     </form>
//   );
// };

// const Checkout = () => {
//   return (
//     <div className="checkoutContainer">
//       <div className="container">
//         <h3>Welcome to the checkout page</h3>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { Button, Alert } from 'antd';
import axios from 'axios';
import '../cart/checkout.css';

const CheckoutForm = ({ totalPrice, onSuccess, onError }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/create-payment-intent`, { amount: totalPrice * 100 })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
            .catch(err => {
                setError('Failed to initialize payment');
                onError('Failed to initialize payment');
            });
    }, [totalPrice, onError]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                    name: 'John Doe',
                },
            },
        });

        if (stripeError) {
            setError(`Payment failed: ${stripeError.message}`);
            setProcessing(false);
            onError(`Payment failed: ${stripeError.message}`);
        } else if (paymentIntent.status === 'succeeded') {
            setError(null);
            setProcessing(false);
            onSuccess();
        } else if (paymentIntent.status === 'requires_action' || paymentIntent.status === 'requires_source_action') {
            const { error: actionError } = await stripe.handleCardAction(paymentIntent.client_secret);
            if (actionError) {
                setError(`Payment failed: ${actionError.message}`);
                setProcessing(false);
                onError(`Payment failed: ${actionError.message}`);
            } else {
                setError(null);
                onSuccess();
            }
        }
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <CardNumberElement className="stripe-input" />
            <CardExpiryElement className="stripe-input" />
            <CardCvcElement className="stripe-input" />
            <Button type="primary" htmlType="submit" disabled={processing || !stripe || !elements} loading={processing} block>
                Pay Now ₹{totalPrice.toFixed(2)}
            </Button>
            {error && <Alert message="Error" description={error} type="error" showIcon />}
        </form>
    );
};

export default CheckoutForm;
