// import React, { useState } from 'react';
// import "./Pricing_main.css";
// import { FaCartShopping } from "react-icons/fa6";
// import { BsCart2 } from 'react-icons/bs';
// import Button_box from '../Button/Button_box';
// import Button_red from '../Button/Button_red';

// const Pricing_main = () => {
//     const [billing, setBilling] = useState('monthly');

//     return (
//         <section className="pricing-section">
//             <div className="container">
//                 <div className="top_pricing_container">
//                 <div className="priceBG">
//                         <span className="price_redDot"></span>
//                         <p className="price">PRICING</p>
//                     </div>
//                     <h1 className="title_pricing">The best pricing plans.</h1>
//                     <p className="description_pricing">We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
//                 </div>
//                 <div className="pricing-cards">
//                     <div className="card">
//                         <div className='icon_top'>
//                             <FaCartShopping className='Icon_top_icon' />
//                         </div>
//                         <h1 className="plan-price">$56<span className="billing-cycle">Monthly</span></h1>
//                         <h2 className="plan-title">BUSINESS</h2>
//                         <div className='feature_points'>
//                             <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                             <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
//                             <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
//                             <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                             <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
//                         </div>
//                         <Button_box/>
//                     </div>
                    
//                     <div className="cardpopular">
//                         <span className="badge">POPULAR</span>
//                         <div className='popular_content'>
//                             <div className='icon_top'>
//                                 <FaCartShopping className='Icon_top_icon' />
//                             </div>

//                             <h1 className="plan-price">$38<span className="billing-cycle">Monthly</span></h1>
//                             <h2 className="plan-title">PRO</h2>
//                             <div className='feature_points'>
//                                 <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                                 <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
//                                 <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
//                                 <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                                 <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
//                             </div>
//                             {/* <button className="cta-button popular">Button</button> */}
//                             <Button_red/>
//                         </div>

//                     </div>
//                     <div className="card">
//                         <div className='icon_top'>
//                             <FaCartShopping className='Icon_top_icon' />
//                         </div>
//                         <h1 className="plan-price">$56<span className="billing-cycle">Monthly</span></h1>
//                         <h2 className="plan-title">BUSINESS</h2>
//                         <div className='feature_points'>
//                             <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                             <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
//                             <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
//                             <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                             <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
//                         </div>
//                         <Button_box/>
//                     </div>
//                     <div className="card">
//                         <div className='icon_top'>
//                             <FaCartShopping className='Icon_top_icon' />
//                         </div>
//                         <h1 className="plan-price">$56<span className="billing-cycle">Monthly</span></h1>
//                         <h2 className="plan-title">BUSINESS</h2>
//                         <div className='feature_points'>
//                             <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                             <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
//                             <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
//                             <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
//                             <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
//                         </div>
//                         <div>
//                             <Button_box/>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Pricing_main









/* ---------------package showing dynamically (style is applying form package.css) ---------------- */


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Pricing_main.css";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCartGlobally } from '../../contexts/cartContext';

const Pricing_main = () => {
    const [pricingPlans, setPricingPlans] = useState([]);
    const { addToCart } = useCartGlobally();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getAllPrice`);
                const data = response.data.allPrice[0];
                setPricingPlans(data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };

        fetchPricingPlans();
    }, []);

    // Handle adding the package to the cart
    const handleAddToCart = (index) => {
        const product = {
            _id: `package-${index}`, // Unique ID for each package
            heading: pricingPlans.cartHeading[index],
            price: pricingPlans.cartPrice[index],
            list: pricingPlans[`cartList${index}`],
        };
        addToCart(product); // Use the addToCart function from context
        toast.success('Item added to cart');
        navigate('/cart'); // Navigate to the cart page
    };

    // Render individual package card
    const renderPackageCard = (index) => (
        <div className="packageChildCard" key={index}>
            <div className="packageHeadingData">
                <div className="packageContent">
                    <h3>{pricingPlans.cartHeading[index]}</h3>
                    <p className="packagecartPrice">${pricingPlans.cartPrice[index]}</p>
                    <p>plus $366 state fee</p>
                    <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
                </div>
            </div>
            <ul className="packageListContent">
                {pricingPlans[`cartList${index}`].map((item, idx) => (
                    <li className="cartListData" key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="packageSelectionContainer pricing_main">
            <div className="container">
                <div className="packageHeading">
                    <h3>Select a Package for Limited Liability Company</h3>
                    <p>We offer 3 flavors of packages that range from laying the foundation to building the whole house.</p>
                </div>
                <div className="packageCard">
                    {pricingPlans.cartHeading && pricingPlans.cartHeading.length > 0 ? (
                        [0, 1, 2].map((index) => renderPackageCard(index))
                    ) : (
                        <p>Loading packages...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pricing_main;
