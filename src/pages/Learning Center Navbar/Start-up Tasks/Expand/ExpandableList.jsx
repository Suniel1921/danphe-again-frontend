import React, { useState } from 'react';
import './ExpandableList.css'; // Import CSS for styling

const ExpandableList = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="expandable-list">
            <h2>10 Steps to Starting a Business</h2>
            <div className='div_list'>
                <ol>
                    <li className="list-item">
                        Write a business plan. Form goals and objectives for your new company.
                        Start with a detailed outline of what you plan to accomplish. This is the first of many steps to starting a business.
                    </li>
                    <li className="list-item">
                        Set up a legal business structure. Setting your company up as a corporation or LLC are popular entity structures
                        for many small businesses. This protects owners' personal assets from business debts and liabilities. Additionally,
                        incorporating can provide credibility and tax benefits.
                    </li>
                    <li className="list-item">
                        Obtain start-up capital. Whether you use your own savings or obtain loans, starting a business requires money.
                        The loan process can take months to check off your business startup checklist, so start early. Lenders often request
                        a completed business plan prior to approval of funding.
                    </li>
                    <button onClick={handleExpandClick} className="button_expand">
                        {isExpanded ? 'Collapse list...' : 'Click to expand list...'}
                    </button>
                    {isExpanded && (
                        <>
                            <li className="list-item">Choose a business location. The location of your business can have a significant impact on its success.</li>
                            <li className="list-item">Register your business name. Make sure to register your business name with the appropriate authorities.</li>
                            <li className="list-item">Obtain necessary licenses and permits. Different businesses may require different types of licenses and permits.</li>
                            <li className="list-item">Set up accounting and record-keeping systems. Proper financial management is crucial for the success of your business.</li>
                            <li className="list-item">Hire employees. If your business requires a team, start the hiring process early.</li>
                            <li className="list-item">Market your business. Develop a marketing strategy to attract customers to your business.</li>
                            <li className="list-item">Plan for growth. Consider your long-term goals and how you plan to expand your business.</li>
                        </>
                    )}
                </ol>
            </div>
        </div>
    );
};

export default ExpandableList;
