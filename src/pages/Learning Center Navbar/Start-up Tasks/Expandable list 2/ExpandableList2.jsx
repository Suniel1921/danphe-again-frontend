import React, { useState } from 'react';
import './ExpandableList2.css'; // Import CSS for styling

const Expandablelist2 = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mainsteps-container">
            <h2>10 Steps to Starting a Business</h2>
            <div className='steps-container'>
                <ol>
                    <li className="step-item">
                    Appoint a Registered Agent. Businesses must maintain an address for service of process where legal documents can be received. incorporate.com provides Registered Agent service for all companies that we form. This is an important, often overlooked, task on a business startup checklist.
                    </li>
                    <li className="step-item">
                    Satisfy insurance requirements. Incorporating or forming an LLC does not provide a company with business insurance. Most companies obtain general business insurance from an insurance provider. Corporations and LLCs that hire employees also typically obtain unemployment and workers compensation insurance.
                    </li>
                    <li className="step-item">
                    Complete additional filings as needed. Companies that expand to do business outside their original state of incorporation or LLC formation generally register in those additional states. incorporate.com can assist with these registration filings, also called "qualifications." Amendments can also be filed if the information listed on the formation document, like the legal name of the company or address, changes.
                    </li>
                    <button onClick={handleExpandClick} className="toggle-button">
                        {isExpanded ? 'Collapse list...' : 'Click to expand list...'}
                    </button>
                    {isExpanded && (
                        <>
                            <li className="step-item">Register "Doing Business As" names. Will your corporation or LLC do business under a name other than its legal name filed with the Secretary of State? If so, it must file a DBA (Doing Business As) name. We can help you address this step to starting your business by filing your DBA name.</li>
                            <li className="step-item">Draft internal documents for the business. Corporations are governed by their internal bylaws, whereas LLCs are governed by an operating agreement. incorporate.com can customize bylaws or an LLC operating agreement for your business. This is a step on your new business checklist that helps with organization.</li>
                            <li className="step-item">Establish a business presence. Identify a location for the business and establish a business address. incorporate.com offers regular mail forwarding service in either Delaware or Nevada.</li>
                            <li className="step-item">Get a business credit card. A business credit card helps separate your professional and personal expenses and can help you protect your personal assets from business liabilities. incorporate.com highly recommends this step to starting a business.</li>
                            <li className="step-item">Get started. Schedule an opening day for your business. Giving yourself a goal helps keep things on track and can increase your productivity.</li>
                            
                        </>
                    )}
                </ol>
            </div>
        </div>
    );
};

export default Expandablelist2;
