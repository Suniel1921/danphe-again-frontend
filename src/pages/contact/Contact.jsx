import React from 'react';
import '../contact/contact.css';

const Contact = () => {
  return (
    <>
    <div className="container">
    <div className='ContainerForm'>
      <h2 className='contactHeader'>
        Contact us
      </h2>
      <p>
        We're sorry to have missed you! Live Chat Support is not available at this time. Please fill out this form below and one of our specialists will respond to your request shortly. You can expect a response within 1 business day. If you are in need of immediate assistance, or you are requesting a change to a recently submitted order, Please call us.
      </p>

    <form>
        <fieldset>
                <h2 className='formHeader'>We Look Forward To Hearing From You </h2>
            <div className='formrow'>
                <div className='formcol'>
                    <label> Subject of My Message</label>
                    <select name="subject" id="subject"  required>
                        <option value="">Please select one</option>
                        <option value="subject1">Subject 1</option>
                        <option value="subject2">Subject 2</option>
                    </select>
                </div>
            </div>
            <div className='formrow'>
                <div className='formcol'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                    />
                </div>
                <div className='formcol'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                    />
                </div>
            </div>

            <div className='formrow'>
                <div className='formcol'>
                    <label htmlFor="primaryPhone">Primary Phone</label>
                    <input
                        type="tel"
                        id="primaryphone"
                        name="primaryphone"
                        required
                    />
                </div>
                <div className='formcol'>
                    <label htmlFor="secondaryphone">Secondary Phone</label>
                    <input
                        type="tel"
                        id="secondaryPhone"
                        name="secondaryphone"
                    />
                </div>
            </div>

            <div className='formrow'>
                <div className='formcol'>
                    <label htmlFor="contactEmail">Contact Email</label>
                    <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        required
                    />
                </div>
                <div className='formcol'>
                    <label htmlFor="confirmEmail">Confirm Email</label>
                    <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                        required
                    />
                </div>
            </div>

            <div className='formrow'>
                <div className='formcol'>
                    <label> Industry</label>
                    <select name="industry" id="industry"  required>
                        <option value=""></option>
                        <option value="subject1">Subject 1</option>
                        <option value="subject2">Subject 2</option>
                    </select>
                </div>
            </div>


            <div className='formrow'>
                <div className='formcol'>
                    <label htmlFor="orderNumber">Order Number</label>
                    <input
                        type="text"
                        id="orderNumber"
                        name="orderNumber"
                        placeholder='Example 000000'
                    />
                </div>
                <div className='formcol'>
                    <label htmlFor="invoiceNumber">Invoice Number</label>
                    <input
                        type="text"
                        id="invoiceNumber"
                        name="invoiceNumber"
                        placeholder='Example: 7000000'
                    />
                </div>
            </div>
            <div className='formrow message'>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    maxLength="1000"
                />
            </div>

            <div className="button-row">
            <button type="submit" className="submit-button">Submit</button>
          </div>
            </fieldset>
        </form>
      </div>

    </div>
    </>
  )
}
export default Contact

 //this component is for new order and existing order