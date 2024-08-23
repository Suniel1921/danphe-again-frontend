import React from 'react'
import "./State_guides.css";


const State_guides = () => {
  return (
    <div className='main_state_guides' >
      <div className='top_main_hero_section_state_guides'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_State_guides' />
        <p className='image_over_paragraph_state'>
          State Guides
        </p>
      </div>


      <div className='bottom_bar_state_guides'>
        <div className='left_side_state_guides'>
          <p className='paragraph_state_guides'>
            Most of our customers form their new companies in the state where they conduct the majority of their business. Need more state-specific information to decide what's right for your business?
            <b>
              Choose a state from the dropdown for more information.
            </b>
          </p>
        </div>
        <div className='right_side_state_guides'>
          <select name="state" id="state" className='country_state_guide'>
            <optgroup label="Select a state" value="">
              <option value="california">California</option>
              <option value="texas">Texas</option>
              <option value="new-york">New York</option>
              <option value="florida">Florida</option>
            </optgroup>
          </select>


          <button className='state_getstarted'>
              Go
          </button>

        </div>
      </div>
    </div>
  )
}

export default State_guides
