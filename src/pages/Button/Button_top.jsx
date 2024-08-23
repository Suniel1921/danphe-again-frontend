import React from 'react';
import './Button_top.css';
import { Link } from 'react-router-dom';

const Button_top = () => {
  return (
    <button className="hover-button">
      <div className="hover-button__div">
        <span>

          <p>Get Started</p>

          {/* <p>Let's Get Started</p> */}

        </span>
      </div>
      <div className="hover-button__div">
        <span>

          <Link to={'/quote-pricing'}>Get Started</Link>

          {/* <Link to={'/quote-pricing'}>Let's Get Started</Link> */}

         
        </span>

      </div>
    </button>
  );
};

export default Button_top;
