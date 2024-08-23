import React from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  return (
    <section>
      <div className="container">
        <h2 className='h2_div'> Contact Us</h2>
        

        <div className="container_div">
          <div className="mapSection">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0206827200386!2d85.31895767492226!3d27.685755626444482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17000477c865%3A0xc8d8ea8f33bee317!2sNepal%20Tech%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1722750319139!5m2!1sen!2snp"
              className="iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="addressSection">
              <div className="addressText">
                <h2 className="title_contact">ADDRESS</h2>
                <p>Rio 5 Marg, Lalitpur 44700</p>
              </div>
              <div className="addressText">
                <h2 className="title_contact">EMAIL</h2>
                <a className="emailSection" href="mailto:example@email.com">example@email.com</a>
                <h2 className="title_contact">PHONE</h2>
                <p className="emailSection">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="feedbackForm">
            <h2 className="feedbackTitle">Have Any Questions?</h2>
            <div className="formField">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" name="name" className="input" />
            </div>
            <div className="formField">
              <label htmlFor="email" className="label">Email</label>
              <input type="email" id="email" name="email" className="input" />
            </div>
            <div className="formField">
              <label htmlFor="message" className="label">Message</label>
              <textarea id="message" name="message" className="textarea"></textarea>
            </div>
            <button className="button_send">Send</button>
            {/* <p className="footerText">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
