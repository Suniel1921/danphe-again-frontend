// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../cart/cart.css';
// import { MdDeleteForever } from "react-icons/md";
// import { useAuthGlobally } from '../../contexts/AuthContext';
// import { useCartGlobally } from '../../contexts/cartContext';
// import axios from 'axios';

// const Cart = () => {
//     const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartGlobally();
//     const [auth, setAuth] = useAuthGlobally();
//     const navigate = useNavigate();

//     const totalPrice = cart.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);

//     const handleCheckout = async () => {
//         if (!auth.user) {
//             navigate('/login');
//         } else {
//             try {
//                 await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/createOrder`, {user: auth.user._id,items: cart,total: totalPrice});
//                 // Clear cart after successful order
//                 localStorage.removeItem('cart');
//                 // Add logic to clear the cart context state if needed
//                 navigate('/contact-info'); // Redirect to a success page
//                 // navigate('/order-success'); // Redirect to a success page
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
//                                     <button className="removeItem" onClick={() => removeFromCart(item._id)}><MdDeleteForever/></button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className='emptyCart'>Your cart is empty</p>
//                         )}
//                     </div>
//                     <div className="summary">
//                         <h3>Summary</h3>
//                         <div className="summaryDetails">
//                             <p>ITEMS {cart.length}</p>
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
import '../cart/cart.css';
import { MdDeleteForever } from "react-icons/md";
import { useAuthGlobally } from '../../contexts/AuthContext';
import { useCartGlobally } from '../../contexts/cartContext';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartGlobally();
    const [auth] = useAuthGlobally();
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);

    // Handle checkout process
    const handleCheckout = async () => {
        if (!auth.user) {
            navigate('/login');
        } else {
            try {
                await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/createOrder`, {
                    user: auth.user._id,
                    items: cart,
                    total: totalPrice
                });
                // Clear cart after successful order
                localStorage.removeItem('cart');
                navigate('/contact-info'); // Redirect to the contact info page
            } catch (err) {
                console.error('Error creating order', err);
            }
        }
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
                            <button className="checkoutBtn" onClick={handleCheckout}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
