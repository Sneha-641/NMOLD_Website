import React from 'react';
import '../styles/Pricing.css'; // Import a CSS file for styling

const Pricing = () => {
    return (
        <div className="pricing-container">
            <div className=''>
                <h2 className='heading'>Transparent Pricing for You</h2>
                <p className='text-[#6A6A6A] mt-5 text-[16px]'>Start saving time today and choose your best plan</p>

            </div>

            <div className="pricing-plans mt-10">
                <div className="pricing-plan">
                    <h3 className='pln-pricing'>Intro</h3>
                    <ul>
                        <li>✓ Upload Video up to 720p Resolution</li>
                        <li>✓ Attachment & Post Scheduling</li>
                        <li>✓ Set your rates</li>
                        <li>✓ Exclusive Deals</li>
                        <li>✓ Advanced Statistics</li>
                    </ul>
                    <div className="price price-choose">$123 /month</div>
                    <button className="choose-button">Choose</button>
                </div>

                <div className="pricing-plan">
                    <h3 className='pln-pricing'>Base</h3>
                    <ul>
                        <li>✓ Upload Video with HD Resolution</li>
                        <li>✓ Attachment & Post Scheduling</li>
                        <li>✓ Set your rates</li>
                        <li>✓ Exclusive Deals</li>
                        <li className='pricing-no'>✗ Advanced Statistics</li>
                    </ul>
                    <div className="price price-choose">$123 /month</div>
                    <button className="choose-button">Choose</button>
                </div>

                <div className="pricing-plan pricing-plan-active pro">
                    <div className=' flex justify-between items-center w-full'>
                        <h3 className=' font-semibold text-[24px]'>Pro</h3>
                        <div className="save-badge ">Save $40</div>
                    </div>
                    <ul className='pricing-list'>
                        <li>✓ Upload Video with HD Resolution</li>
                        <li>✓ Attachment & Post Scheduling</li>
                        <li>✓ Set your rates</li>
                        <li>✓ Exclusive Deals</li>
                        <li className='pricing-no'>✗ Advanced Statistics</li>
                    </ul>
                    <div className="price">$123 /month</div>
                    <div className='flex w-full items-center justify-center mt-5'>
                        <button className="btn px-[16px] h-[61px] w-[231px] justify-center text-center">Try 1 month</button>

                    </div>
                </div>

                <div className="pricing-plan">
                    <h3 className='pln-pricing'>Enterprise</h3>
                    <ul>
                        <li>✓ Upload Video with 4K Resolution</li>
                        <li>✓ Attachment & Post Scheduling</li>
                        <li>✓ Set your rates</li>
                        <li>✓ Exclusive Deals</li>
                        <li>✓ Advanced Statistics</li>
                    </ul>
                    <div className="price price-choose">$123 /month</div>
                    <button className="choose-button">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;