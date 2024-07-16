import React from 'react'
import PI from "../assets/PI12.png"
import { Link } from 'react-router-dom'

const HaveAQues = () => {
    return (
        <>
            <div className='flex justify-center items-center mb-[10rem]'>
                <div className='h-[405px] flex '>
                    <div className='h-[405px] w-[608px]'>
                        <img src={PI} alt="" className='h-[405px] w-[608px]' />
                    </div>
                    <div className='px-10 py-6'>
                        <div className='pricingM-right-box2 p-4'>
                            <div className='text-[var(--theme)] text-[25px] mt-2'>
                                Have a question?
                            </div>
                            <div className='mt-4' style={{
                                fontSize: "40px",
                                fontWeight: "700",
                                lineHeight: "64px",
                                textAlign: "left",
                                color: "#000000",
                            }}>
                                Contact Us
                            </div>
                            <div className='' style={{
                                fontSize: "20px",
                                fontWeight: "400",
                                lineHeight: "32px",
                                textAlign: "justified",
                                color: "#6A6A6A",

                            }}>
                                We just do more than just connect with the clients, we relate to their business and try to provide them with the best possible cost-effective solution.
                            </div>
                            <div className='btn px-16 h-[57px] rounded-[8px] txet-[20px] w-[fit-content] mt-7'>
                             <Link to="/meetingform">
                                Schedule a Meeting
                             </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HaveAQues