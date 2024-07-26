import React from 'react';
import '../styles/Pricing.css'; // Import a CSS file for styling
import { Link } from 'react-router-dom';

const Pricing = () => {
    // const navigate=Navigator();
    return (
        <div className="pricing-container">
            <div className=''>
                <h2 className='heading max-sm:text-[30px]'>Transparent Pricing for You</h2>
                <p className='text-[#6A6A6A] mt-5 max-sm:mt-2 text-[16px]'>Start saving time today and choose your best plan</p>

            </div>

            <div className="pricing-plans max-[1100px]:col-auto mt-10 ">
                <div className="pricing-plan relative pricing-plan-active">
                    <h3 className='pln-pricing justify-center text-center items-center flex'>Web Design</h3>
                    <ul>
                        <li>✓ UI/UX Design
                        </li><li>✓ Responsive Design
                        </li><li>✓ Branding and Visual Design</li>
                    </ul>
                    <div className='price-choose-main '>
                        <div className="price price-choose">$123 /month</div>
                        <button className="choose-button" onClick={()=>{}} ><Link to="/form">
                            <div className="w-full h-full">
                                Choose

                            </div>
                        </Link></button>
                    </div>
                </div>

                <div className="pricing-plan relative pricing-plan-active">
                    <h3 className='pln-pricing'>Web Development</h3>
                    <ul>
                        <li>✓ Front-end Development (HTML, CSS, JavaScript, frameworks like React, Angular, Vue)
                        </li><li>✓ Back-end Development
                            (Node.js, Python, Ruby on Rails,
                            PHP, Java)
                        </li><li>✓ Full-Stack Development</li>
                    </ul>

                    <div className='price-choose-main'>

                        <div className="price price-choose">$123 /month</div>
                        <button className="choose-button" ><Link to="/form">
                            <div className="">
                                Choose

                            </div>
                        </Link></button>
                    </div>
                </div>

                <div className="pricing-plan pricing-plan-active pro relative">
                    <div className=' flex justify-between items-center w-full'>
                        <h3 className=' font-semibold text-[24px]'>Mobile App Development</h3>
                        {/* <div className="save-badge ">Save $40</div> */}
                    </div>
                    <ul className='pricing-list '>
                        <li>✓ Progressive Web Apps (PWAs)
                        </li><li>✓ Native App Development (iOS,
                            Android)
                        </li><li>✓ Cross-Platform App
                            Development</li>
                    </ul>
                    <div className='w-full items-center  justify-center mt-5'>
                        <div className='price-choose-main'>

                            <div className="price price-choose">$123 /month</div>
                            <button className="choose-button w-full flex items-center  justify-center" ><Link to="/form">
                                <div className="flex justify-center items-center">
                                    Choose

                                </div>
                            </Link></button>
                        </div>
                    </div>
                </div>
                
                <div className="pricing-plan  pricing-item4 relative pricing-plan-active pro">
                    <h3 className='pln-pricing'>Digital Marketing</h3>
                    <ul>
                        <li>✓ Social Media Marketing
                        </li><li>✓ Email Marketing
                        </li><li>✓ Pay-Per-Click (PPC) Advertising</li>
                    </ul>
                    <div className='price-choose-main'>
                        <div className="price price-choose">$123 /month</div>
                        <button className="choose-button w-full flex items-center  justify-center" ><Link to="/form">
                            <div className="flex justify-center items-center">
                                Choose
                            </div>
                        </Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pricing;