import React, { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import "../pricing/quotePricing.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

// Main QuotePricing Component
const QuotePricing = () => {
  const [priceData, setPriceData] = useState([]);

  // Fetch all price data from the API
  const getAllPriceData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getAllPrice`);
      if (response.data.success) {
        setPriceData(response.data.allPrice); // Set the fetched data to state
      }
    } catch (error) {
      // Handle errors and display toast messages
      toast.error(error.response ? error.response.data.message : "Something went wrong");
    }
  };

  // Use effect to fetch price data on component mount
  useEffect(() => {
    getAllPriceData();
  }, []);

  // Render the component
  return (
    <>
    <div className="navbarContainer">
    <Navbar/>
    </div>
    <div className="container">
      <div className="quote-main-container">
        <div className="quote-full-container">
          <h2 className="quote-main-header">
            Select a State for Your New Business Entity
          </h2>
          <p className="quote-header-paragraph">
            Many businesses incorporate in their home states, but there are advantages to selecting other states.
          </p>
          <div className="quote-search-logo">
            <SlLocationPin className="quote-icon-map" />
            <span className="countryList">
              <select name="Country" id="Country" className="quote-select">
                <option value="f">California</option>
              </select>
            </span>
          </div>
          <hr />
          <h2 className="quote-main-header">
            Choose the Type of Entity You'd Like to Form
          </h2>
          <p className="quote-header-paragraph">
            LLC is the most popular entity type for small businesses, but it's not for everyone. We've provided descriptions of some common entity types to help you choose.
          </p>
          
          {/* Pricing Container */}
          <div className="quote-pricing-container">
            {priceData.map((pData) => (
              <PricingCard key={pData.id} pData={pData} />
            ))}
          </div>
        </div>

        {/* Left Side Help Section */}
        <div className="quote-left-side">
          <HelpSection />
        </div>
      </div>
    </div>
    </>
  );
};

// PricingCard Component to display individual pricing options
const PricingCard = ({ pData }) => {
  return (
    <div className="quote-pricing-card">
      <div className="quote-card-content">
        <h2 className="quote-card-header">{pData.heading}</h2>
        <p className="quote-card-paragraph">{pData.para}</p>
        
        {/* List of Content */}
        <ul className="quote-card-list">
          {pData.contentList.map((content, index) => (
            <li key={index}>
              <FaCheck className="quote-check-icon" />
              {content}
            </li>
          ))}
        </ul>

        {/* FAQ Link */}
        <div className="quote-faq">
          Frequently Asked Questions
          <FaExternalLinkAlt className="quote-faq-icon" />
        </div>
      </div>
      
      {/* Pricing Information */}
      <div className="quote-pricing">
        <p className="quote-pricing-paragraph">Packages starting at</p>
        <h3>$99</h3>
        <p className="quote-bottom-paragraph">Plus State Fees</p>
        <Link to={`/package-selection/${pData._id}`}>
          <button className="quote-select-button">Select</button>
        </Link>
      </div>
    </div>
  );
};

// HelpSection Component for additional information
const HelpSection = () => {
  return (
    <div className="quote-help-container">
      <p className="quote-help-header">
        Need help selecting a state for your new business entity?
      </p>
      <ul className="quote-help-links">
        <li><a href="#">Choosing Your Home State</a></li>
        <li><a href="#">Why Delaware is the 'Best'</a></li>
      </ul>
      <p className="quote-top-states-header">Top States to incorporate in</p>
      <ul className="quote-top-states-list childQuote">
        {topStates.map((state, index) => (
          <TopStateItem key={index} state={state} />
        ))}
      </ul>
    </div>
  );
};

// Array of top states for incorporation
const topStates = [
  { name: "Delaware", tooltip: "Content for Delaware" },
  { name: "California", tooltip: "Content for California" },
  { name: "Florida", tooltip: "Content for Florida" },
  { name: "New York", tooltip: "Content for New York" },
  { name: "Nevada", tooltip: "5% of customers Nevada" },
  { name: "Texas", tooltip: "Content for Texas" },
];

// TopStateItem Component for displaying each state in the help section
const TopStateItem = ({ state }) => {
  return (
    <li>
      <a href="#">{state.name}</a>
      <span className="tooltip">{state.tooltip}</span>
    </li>
  );
};

export default QuotePricing;
