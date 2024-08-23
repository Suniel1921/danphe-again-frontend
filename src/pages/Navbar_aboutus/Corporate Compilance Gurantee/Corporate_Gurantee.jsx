import React from 'react';
import "./Corporate_Gurantee.css";

const Corporate_Gurantee = () => {
  return (
    <div className='corporate_gurantee_container'>
      <h1 className='heading_gurantee'>$75,000 Ascend Compliance Guarantee</h1>
      <div className="main_bottom_div">
        <div className="left_bottom_gurantee">
          <p className='gurantee_paragraph'>
            Ascend guarantees its services against filing defects negligently caused by Ascend for the life of your entity. If your filing is found by a court of competent jurisdiction within the United States to be invalid at the time the formation documents were properly filed solely due to the fault of Ascend, we will resolve the issue, or we will pay you up to $75,000.
          </p>
          <ul>
            <li>
              This guarantee does not cover any failure by you to abide by our Terms of Service, any situation where there is comparative or contributory negligence by anyone (other than Ascend), or any failure by you to meet the business's subsequent requirements after the initial formation documents have been filed.
            </li>
            <li>
              This guarantee does not cover any issues caused by or related to inaccurate or unlawful information provided by you or your agents to Ascend.
            </li>
            <li>
              This guarantee only covers instances where the corporation or LLC is declared invalid in its entirety. Ascend will not be responsible for any consequential damages.
            </li>
            <li>
              This guarantee will remain in effect so long as:
              <ul>
                <li>
                  Your corporation or LLC meets all state and federal corporate, regulatory, capitalization, securities, and tax requirements.
                </li>
                <li>
                  You continue to use Ascend as a registered agent; and
                </li>
                <li>
                  Your company's address, phone number, and payment information remain current and updated with Ascend.
                </li>
              </ul>
            </li>
            <li>
              This guarantee does not apply if your corporation or LLC is conducting an illegal activity or has an unlawful purpose.
            </li>
            <li>
              Ascend reserves the right to amend this guarantee unilaterally at any time by posting the new terms on its website.
            </li>
          </ul>
          <h2>
            Ready to create your company?
          </h2>
          <button className='left_button_corporate'>
            Get Started
          </button>
        </div>
        <div className="right_bottom_gurantee">
          {/* Add content here if needed */}
          <h3>
            Let's get to it.
          </h3>
          <p>
            Create your corporation or limited liability company today.


          </p>
          <button className='button_about_corporate'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Corporate_Gurantee;
