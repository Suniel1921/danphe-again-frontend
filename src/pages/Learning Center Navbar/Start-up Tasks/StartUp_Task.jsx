import React from 'react'
import "./StartUp_Task.css";
import Start_grid from './Grid/Start_grid';
import ExpandableList from './Expand/ExpandableList';
import Expandablelist2 from './Expandable list 2/ExpandableList2';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const StartUp_Task = () => {
  return (
    <div className='start_up_main_container'>
      <div className='top_main_hero_section'>
        <img src="/img/hero-image-planning.jpg" alt="" className='top_Start_image' />
        <p className='image_over_paragraph_start'>
          Steps to Starting a Small Business.
        </p>
      </div>


      .
      <div className="bottom_startup">
        {/*  left middle div */}
        <div className="left_middlediv">
          <p className='stat_paragraph'>
            Starting a new business means more than just ownership. Launching your own startup entails dealing with various amounts of paperwork and compliance at the state, federal, and local levels, as well. Additionally, there will come a day when you hope to expand your small business into something much greater.
          </p>
          <p className='stat_paragraph'>
            Below are several helpful resources designed to arm entrepreneurs with a wealth of information on building a new business. Tick off items on a small business or startup checklist, browse industry best-practices on forming your own business, or determine for yourself what business structure best benefits your enterprise.
          </p>
          <Start_grid />
          <ExpandableList />
          <Expandablelist2 />
        </div>


        {/* right middle div */}
        <div className='right_start'>
        <div className="right_middle_div">
          <ImQuotesLeft className='quotes_start' /><span className='paragraph_quotes'>
            In the five or so years that we have been working with you, there have never been any problems, and your staff is always there to work with us in a courteous and helpful manner. Keep up the good work.
          </span>
          <ImQuotesRight className='quotes_start' />
          
          
        </div>
        <div className="bottomQuotes">
          Lawrence Dufraine - Londonerry,<br/>
          NH - 11/22/2014
          </div>
          <button className='start_getstarted'>
              Get Started
          </button>
        </div>
      </div>

    </div>
  )
}

export default StartUp_Task
