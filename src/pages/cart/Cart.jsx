


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../cart/cart.css';
// import { MdDeleteForever } from "react-icons/md";
// import { useAuthGlobally } from '../../contexts/AuthContext';
// import { useCartGlobally } from '../../contexts/cartContext';
// import axios from 'axios';
// import Navbar from '../navbar/Navbar';

// const Cart = () => {
//     const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartGlobally();
//     const [auth] = useAuthGlobally();
//     const navigate = useNavigate();

//     // Calculate total price
//     const totalPrice = cart.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);

//     // Handle checkout process
//     const handleCheckout = async () => {
//         if (!auth.user) {
//             navigate('/login');
//         } else {
//             try {
//                 await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/createOrder`, {
//                     user: auth.user._id,
//                     items: cart,
//                     total: totalPrice
//                 });
//                 // Clear cart after successful order
//                 localStorage.removeItem('cart');
//                 navigate('/contact-info'); // Redirect to the contact info page
//             } catch (err) {
//                 console.error('Error creating order', err);
//             }
//         }
//     };

//     return (
//         <div className="cart">
//             <div className="container">
//                 <h3>Shopping Cart</h3>
//                 <div className="cartContainer">
//                     <div className="cartItems">
//                         {cart.length > 0 ? (
//                             cart.map(item => (
//                                 <div className="cartItem" key={item._id}>
//                                     <div className="cartItemDetails">
//                                         <h4>{item.heading}</h4>
//                                         <p>Price: Rs {Number(item.price).toFixed(2)}</p>
//                                         <p>Quantity: {item.quantity}</p>
//                                         <ul>
//                                             {item.list.map((detail, index) => (
//                                                 <li key={index}>{detail}</li>
//                                             ))}
//                                         </ul>
//                                         <div className="quantityControl">
//                                             <button onClick={() => decrementQuantity(item._id)}>-</button>
//                                             <span>{item.quantity}</span>
//                                             <button onClick={() => incrementQuantity(item._id)}>+</button>
//                                         </div>
//                                     </div>
//                                     <button className="removeItem" onClick={() => removeFromCart(item._id)}>
//                                         <MdDeleteForever />
//                                     </button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className='emptyCart'>Your cart is empty</p>
//                         )}
//                     </div>
//                     <div className="summary">
//                         <h3>Summary</h3>
//                         <div className="summaryDetails">
//                             <p>ITEMS: {cart.length}</p>
//                             <p>Total: Rs {Number(totalPrice.toFixed(2))}</p>
//                             <button className="checkoutBtn" onClick={handleCheckout}>Continue</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;







import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert, Modal } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import '../cart/cart.css';
import { MdDeleteForever } from "react-icons/md";
import { useAuthGlobally } from '../../contexts/AuthContext';
import { useCartGlobally } from '../../contexts/cartContext';
import CheckoutForm from './Checkout';


const stripePromise = loadStripe('pk_test_51PqoUQ08Ir5euo8TQhNGdf2gt62ZqbCQJvM2lN6D2lBIC1EhF7BtqkvQroNoUO111lzIrXwUO3Jvjh2sI57yJY5H00jnHYbfFE');

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartGlobally();
    const [auth] = useAuthGlobally();
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(false);
    const [showCheckout, setShowCheckout] = React.useState(false); // To control the visibility of the checkout form
    const [totalPrice, setTotalPrice] = React.useState(0);

    React.useEffect(() => {
        setTotalPrice(cart.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0));
    }, [cart]);

    const handleCheckout = async () => {
        if (!auth.user) {
            navigate('/login');
        } else {
            setShowCheckout(true); // Show checkout form
        }
    };

    const handlePaymentSuccess = () => {
        setShowCheckout(false); // Hide checkout form
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            navigate('/contact-info'); // Redirect after successful payment
        }, 5000); // Show success message for 5 seconds
    };

    return (
        <div className="cart">
            <div className="container">
                <h3>Shopping Cart</h3>
                <div className="cartContainer">
                    <div className="cartItems">
                        {cart.length > 0 ? (
                            cart.map(item => (
                                <div className="cartItem" key={item._id}>
                                    <div className="cartItemDetails">
                                        <h4>{item.heading}</h4>
                                        <p>Price: Rs {Number(item.price).toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <ul>
                                            {item.list.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="quantityControl">
                                            <button onClick={() => decrementQuantity(item._id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => incrementQuantity(item._id)}>+</button>
                                        </div>
                                    </div>
                                    <button className="removeItem" onClick={() => removeFromCart(item._id)}>
                                        <MdDeleteForever />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className='emptyCart'>Your cart is empty</p>
                        )}
                    </div>
                    <div className="summary">
                        <h3>Summary</h3>
                        <div className="summaryDetails">
                            <p>ITEMS: {cart.length}</p>
                            <p>Total: Rs {Number(totalPrice.toFixed(2))}</p>
                            <Button className="checkoutBtn" onClick={handleCheckout}>Continue</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Payment"
                visible={showCheckout}
                footer={null}
                onCancel={() => setShowCheckout(false)}
                width={600}
            >
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        totalPrice={totalPrice}
                        onSuccess={handlePaymentSuccess}
                        onError={(err) => {
                            setError(err);
                            setShowCheckout(false); // Hide checkout form
                        }}
                    />
                </Elements>
            </Modal>
            {error && <Alert message="Error" description={error} type="error" showIcon />}
            {success && <Alert message="Success" description="Payment succeeded!" type="success" showIcon />}
        </div>
    );
};

export default Cart;
