import React from 'react'
import "./Limited_Liability_Company.css";
import Tabs_LLC from './Tabs_LLC/Tabs_LLC';

const Limited_Liability_Company = () => {
  return (
    <div className='Main_contaier_LLC'>
      <div className='top_main_hero_section_LLC'>
        <img src="/img/hero-image-collaborate.jpg" alt="" className='top_Start_image_LLC' />
        <p className='image_over_paragraph_start_LLC'>
          What is an LLC (Limited Liability Company)?
        </p>
      </div>


      <div className="LLC_bottomContaier">
        <div className="tabs_LLC">
          <Tabs_LLC/>
        </div>


        <div className="right_LLC">
        <h3 className='right_h3_LLC'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="LLC_button_full">Get Started</button>
        </div>


      </div>
    </div>
  )
}

export default Limited_Liability_Company
