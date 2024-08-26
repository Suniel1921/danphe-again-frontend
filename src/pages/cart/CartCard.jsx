import React from "react";
import "./cartCard.css";
import { useCartGlobally } from "../../contexts/cartContext";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartCard = () => {
  const { cart } = useCartGlobally();
  const navigate = useNavigate();

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  // Additional fees (you can modify these as per your requirement)
  const shippingFee = 20;
  const stateExpediteFee = 130;
  const stateFee = 10;
  const creditCardSurcharge = 10;

  // Calculate the total
  const total = subtotal + shippingFee + stateExpediteFee + stateFee + creditCardSurcharge;

  return (
    <div className="cartCardContainer">
      <h2>Shopping Cart</h2>
      <div className="cartCard">
        {cart.map((item) => (
          <div key={item._id}>
            <h3>{item.heading}</h3>
            <ul>
              {item.list.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="priceRow">
              <h3>TOTAL {item.heading}</h3>
              <p className="price">${item.price}</p>
            </div>
          </div>
        ))}
        
        <div className="packageOptionsAndFees">
          <div className="priceRow">
            <p>Shipping and Handling Fee for Corporate Kit</p>
            <p className="price">${shippingFee}</p>
          </div>
          <div className="priceRow">
            <p>State Expedite Fee for Formation, LLC, Illinois</p>
            <p className="price">${stateExpediteFee}</p>
          </div>
          <div className="priceRow">
            <p>State Fee for Formation, LLC, Illinois</p>
            <p className="price">${stateFee}</p>
          </div>
          <div className="priceRow totalRow">
            <h3>TOTAL Package Options and Fees</h3>
            <p className="price">${subtotal + shippingFee + stateExpediteFee + stateFee}</p>
          </div>
          <div className="priceRow subtotalRow">
            <h3>Subtotal</h3>
            <p className="price">${subtotal}</p>
          </div>
          <div className="priceRow">
            <h3>Estimated Credit Card Surcharge</h3>
            <p className="price">${creditCardSurcharge}</p>
          </div>
          <div className="priceRow totalRow">
            <h3>Total</h3>
            <p className="price">${total}</p>
          </div>
          <p className="additionalInfo">
            Additional sales tax may apply based on a jurisdiction’s
            applicable state, local tax laws, or both. In addition, where
            permitted by applicable law, we impose a surcharge of 2.2% on the
            transaction amount on credit card products, which is not greater
            than our cost of acceptance. We do not surcharge debit cards. If
            applicable, the sales tax will be calculated at the time the order
            is processed and the surcharge will be adjusted to cover the
            additional sales tax.
          </p>
        </div>
        <h3 className="modifiedText" onClick={() => navigate('/cart')}>
          <FaRegEdit /> Modify Cart
        </h3>
      </div>
      <button className="cartCardBtn">Continue</button>
    </div>
  );
};

export default CartCard;




