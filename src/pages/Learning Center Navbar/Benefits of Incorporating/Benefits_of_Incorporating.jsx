import React from 'react';
import './Benefits_of_Incorporating.css';
import { Link } from 'react-router-dom';
import ComparisonChart from './Comparision chart/ComparisonChart';

const BenefitsOfIncorporating = () => {
  return (
    <div className="benefits_container">
      <h1 className="benefits_heading">Why Should I Incorporate My Business?</h1>

      <div className="benefits_main">
        <div className="benefits_left">
          <p className="benefits_paragraph">
            If you're not incorporated, you don't look as professional as you feel. Protect your personal assets, get tax advantages, and grow up your business by incorporating today.
          </p>
          <h2 className="benefits_subheading">What Does It Mean To Be Incorporated?</h2>
          <p className="benefits_paragraph">
            Quite simply, incorporation is the process of defining your business, both legally and strategically. You wouldn't build a house without a plan and a paper trail. So why build a business that way?
          </p>
          <p className="benefits_paragraph">
            By choosing an LLC, s corporation (s corp), or c corporation (c corp), you have the freedom to decide on a tax structure that works for your business.
          </p>
          <h2 className="benefits_subheading">Why Incorporate? The Top Six Reasons for Incorporating Your Business</h2>
          <ul className="benefits_list">
            <li>Personal asset protection</li>
            <li>Tax flexibility and incorporation tax benefits</li>
            <li>Enhanced credibility</li>
            <li>Brand protection</li>
            <li>Perpetual existence</li>
            <li>Deductible expenses</li>
          </ul>
          <h2 className="benefits_subheading">S Corp, C Corp, or LLC: Which One Is Right for Me?</h2>
          <p className="benefits_paragraph">
            Business goals aren't one size fits all and neither is incorporating. When deciding which kind of corporation fits your business strategy, consider some of the different benefits that each kind offers. And take a deeper dive with the comparison chart linked below.
          </p>
          <h4 className='benefits_h4'>
            S Corporation:
          </h4>
          <ul className='benefits_list'>
            <li>Elimination of double taxation of income</li>
            <li>Investment opportunities</li>
            <li>Once-a-year tax filing</li>
          </ul>
          <h4 className='benefits_h4'>
            S Corporation:
          </h4>
          <ul className='benefits_list'>
            <li>Unlimited growth potential through the sale of stock</li>
            <li>No limit on the number of shareholders</li>
            <li>Tax-deductible business expenses</li>
          </ul>
          <h4 className='benefits_h4'>
            S Corporation:
          </h4>
          <ul className='benefits_list'>
            <li>Simplicity</li>
            <li>No residency requirement</li>
            <li>Structure flexibility</li>
          </ul>
          <p className="benefits_paragraph">
            Learn more about the similarities and differences with our comprehensive 
            <Link to="/ComparisonChart">Comparison chart</Link>

          </p>

          <h2 className="benefits_subheading">Where Should I Incorporate My Business?</h2>
          <p className="benefits_paragraph">
            Depending on which corporation type you decide is right for you, there is some flexibility on where you incorporate. Most people incorporate their business in the state where they live and conduct most of their business. However, many owners have found incorporating in another state to be better for their bottom line.
          </p>
          {/* <p className="benefits_paragraph">
            The top states include:
          </p>
          <ul className='benefit_list'>
            <li>Delaware</li>
            <li>California</li>
            <li>Nevada</li>
            <li>Maryland</li>
            <li>Pennsylvania</li>
            <li>Connecticut</li>
          </ul> */}

          <h3>
            Ready to create your company?
          </h3>
          <button className="benefits_button_full_left">Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="benefits_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="benefits_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default BenefitsOfIncorporating;
