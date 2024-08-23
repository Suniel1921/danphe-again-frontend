import React, { useState } from 'react';
import './Tab.css'; // Import the CSS file

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'Our Mission', content:
                <div>
                    <p className='Tabs_paragraph'>
                        It's a cruel world out there for the small business owner. And we can relate because we're entrepreneurs, just like you. We work with business owners throughout their companies' life cycles, helping them overcome the obstacles blocking effective compliance. And we provide the kind of thought leadership and guidance that will inspire and encourage their continued success, no matter the odds.
                    </p>
                    <p className='Tabs_paragraph'>
                        We got into this business because helping entrepreneurs is our passion. And we strongly believe in the power of private enterprise.
                    </p>
                    <h3>
                        ESG Charter
                    </h3>
                    <p className='Tabs_paragraph'>
                        CSC is committed to our purpose of making our communities, customers, people, and partners better off tomorrow than they are today. Learn More.
                    </p>
                </div>
        },
        {
            label: 'Our Story', content:
                <div>
                    <p className='Tabs_paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus!</p>
                    <p className='Tabs_paragraph'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum reprehenderit provident repudiandae iste expedita, debitis impedit laborum cum voluptas distinctio ratione praesentium mollitia accusamus cupiditate accusantium, voluptate deserunt saepe quos?
                    </p>
                </div>
        },
        {
            label: 'Our Team', content:
                <div>
                    <p className='Tabs_paragraph'>
                        Simply put, we know what you're going through. Many of our team members ran their own companies before joining us. So when we say, "we've been there," we actually mean it. Our employees care for your orders as if they were their own, because, yeah, they've been there. And together, we've been there before more than 750,000 times.
                    </p>
                    <p className='Tabs_paragraph'>
                        We know that our success grows from your success, so we strive to fulfill your business needs with enthusiasm, speed, and absolute professionalism. We won't treat you like Joe Schmoe. We'll listen to you like a business partner.
                    </p>
                    <p className='Tabs_paragraph'>
                        Welcome to an entire corporation full of people who love corporations more than anything in the world–a mighty team of credible, approachable folks just like you who are forever dedicated to helping you do it right and do it better.
                    </p>
                </div>
        },
        {
            label: 'Let Us Help', content:
                <div>
                    <p className='Tabs_paragraph'>
                        Ascend provides a range of services that are appropriate to every state of the small business life cycle.
                    </p>
                    <ul className="service-list">
                        <li> <b> we form limited liability companies</b> (LLCs) and many other entity types. Our formation services are available in every U.S. state as well as the District of Columbia.</li>
                        <li> <b> We serve as a registered agent</b> (LLCs) or thousands of U.S. businesses, making sure that our customers receive their legal and business critical documents quickly and securely.</li>
                        <li> <b> We help businesses apply for tax information,</b>including IRS-required Employer Identification Numbers (EINs) and, for nonprofit companies, 501(c) status.</li>
                        <li> <b> We help new entities with their by laws and operating agreements,</b> reserve their unique company names, and register to do business in other states.</li>
                        <li> <b> We help companies meet their ongoing compliance requirements, </b> including annual report preparation, filing and research to find out what business licenses are needed in the form of a Business License Compliance Package.</li>
                    </ul>
                </div>
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-container">
            <div className="tabs-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
            
        </div>
    );
};

export default Tab;
