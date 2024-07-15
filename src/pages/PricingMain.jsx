import React from 'react'
import Pricing from './Pricing'
import "../styles/PricingMain.css"
import OK from "../assets/Vector.png"
import IMG from '../assets/image11.png'
import NOK from "../assets/Vector2.png"
import PI from "../assets/PI12.png"
import ClientReview from './ClientReview'
import { Footer } from './Footer'
import HaveAQues from './HaveAQues'
import { Link } from 'react-router-dom'
const PricingMain = () => {
    const datad = [
        {
            heading: "Maximize your potential with our tailored solutions.",
            img: IMG,
            desc: "We at NMOLD hold pride in our ability to maximize app performance and achieve goals like no other. Completely measurable results for achieving App Installs, User Acquisition & Increased app rating",
            link: "#"
        },
    ]
    const data = [
        {
            name: "Highly vetted individual or teams",
            ok: 1
        }, {
            name: "$$",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        },
    ]
    const data2 = [
        {
            name: "Highly vetted individual or teams",
            ok: 1
        }, {
            name: "$$",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        },
    ]
    const data3 = [
        {
            name: "Highly vetted individual or teams",
            ok: 1
        }, {
            name: "$$",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        },
    ]
    const data4 = [
        {
            name: "Highly vetted individual or teams",
            ok: 1
        }, {
            name: "$$",
            ok: 1
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        }, {
            name: "Scale up and down at your own pace",
            ok: 0
        },
    ]
    return (
        <>
            <div className=''>
                <div className=''>
                    <Pricing />
                </div>
                <div className='flex mt-[2rem] items-center justify-center'>
                    <Link to="/contactus">
                    <div className='h-[84px] w-[865px] pricingM-sub bg-white hover:bg-[var(--theme)] hover:text-white hover:cursor-pointer text-[#060336] text-center justify-center items-center flex'>
                        Need a Customized Plan? Please Contact Us
                    </div>
                    </Link>
                </div>
                <div className='mt-[4rem]'>
                    <div className='h-[795px] overflow-hidden'>
                        <div className='w-full flex justify-center items-center'>
                            <div className='w-[718px] flex justify-center items-center'>
                                <div className='pricingM-sub2 text-center'>
                                    We took the best parts of an agency and freelance marketplace
                                </div>
                            </div>
                            
                        </div>

                        <div className='flex w-full justify-between items-start text-[20px] font-bold mb-4 mt-4'>
                        <div className='w-[28%] '>
                                &nbsp;
                            </div>
                            <div className=' w-[23%]'>
                                Aloa
                            </div>
                            <div className=' w-[23%]'>
                                Marketplace
                            </div>
                            <div className=' w-[26%]'>
                                Agency
                            </div>
                        </div>
                        <div className=''>
                            <div className='pricingM-cards-main gap-[1%]  justify-around px-[3rem]'>
                                <div className='w-[325px]   pt-10'>
                                    <div className=''>
                                        <div className='flex flex-col gap-[2.2rem]  w-[322px]'>
                                            {data.map((item, index) => (
                                                <>
                                                    <div className='flex justify-left items-center pl-3 gap-4'>

                                                        <div className='w-[28px] h-[28px]'>
                                                            {item.ok === 1 ? <img src={OK} alt="" className='w-[28px] h-[28px]' /> : <>
                                                                <img src={NOK} alt="" className='w-[28px] h-[28px]' />
                                                            </>}
                                                        </div>
                                                        <div className='pricingM-sub-txt'>
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='bg-white pricingM-card-right h-[600px] pt-10'>
                                        <div className='flex justify-evenly gap-[15px]'>
                                            <div className='w-[325px] h-[755px]'>
                                                <div className=''>
                                                    <div className='flex flex-col gap-[2.2rem]  w-[322px]'>
                                                        {data.map((item, index) => (
                                                            <>
                                                                <div className='flex justify-left items-center pl-3 gap-4'>

                                                                    <div className='w-[28px] h-[28px]'>
                                                                        {item.ok === 1 ? <img src={OK} alt="" className='w-[28px] h-[28px]' /> : <>
                                                                            <img src={NOK} alt="" className='w-[28px] h-[28px]' />
                                                                        </>}
                                                                    </div>
                                                                    <div className='pricingM-sub-txt'>
                                                                        {item.name}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-[325px] h-[755px] mb-10'>
                                            
                                                <div className=''>
                                                
                                                    <div className='flex flex-col gap-[2.2rem]  w-[322px]'>
                                                        {data3.map((item, index) => (
                                                            <>
                                                                <div className='flex justify-left items-center pl-3 gap-4'>

                                                                    <div className='w-[28px] h-[28px]'>
                                                                        {item.ok === 1 ? <img src={OK} alt="" className='w-[28px] h-[28px]' /> : <>
                                                                            <img src={NOK} alt="" className='w-[28px] h-[28px]' />
                                                                        </>}
                                                                    </div>
                                                                    <div className='pricingM-sub-txt'>
                                                                        {item.name}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-[325px] h-[755px]'>
                                                <div className=''>
                                                    <div className='flex flex-col gap-[2.2rem]  w-[322px]'>
                                                        {data4.map((item, index) => (
                                                            <>
                                                                <div className='flex justify-left items-center gap-4'>

                                                                    <div className='w-[28px] h-[28px]'>
                                                                        {item.ok === 1 ? <img src={OK} alt="" className='w-[28px] h-[28px]' /> : <>
                                                                            <img src={NOK} alt="" className='w-[28px] h-[28px]' />
                                                                        </>}
                                                                    </div>
                                                                    <div className='pricingM-sub-txt'>
                                                                        {item.name}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[4rem]'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <div className='w-[80%]'>
                                {datad.map((item, index) => {
                                    return (<>
                                        <div className={`flex ${index % 2 == 1 ? 'flex-row-reverse' : ''} gap-12 w-full mb-[10rem]`}>
                                            <div className='h-[408px] w-[490px]'>
                                                <img src={item.img} className='h-[408px] w-[490px]' />
                                            </div>
                                            <div className='flex flex-col w-[601px]'>
                                                <div className='text-[25px] text-[var(--theme)]'>
                                                    Own an App? Grow like Crazy with us.
                                                </div>
                                                <div className=' text-left text-[35px] font-semibold flex float-left justify-start items-start'>
                                                    <p>
                                                        {item.heading}

                                                    </p>
                                                </div>
                                                <div className=' text-justify pt-3 ' style={{
                                                    fontSize: "20px",
                                                    fontWeight: "400",
                                                    lineHeight: "37.2px",
                                                    textAlign: "justified",
                                                    color: "#6A6A6A",
                                                }}>
                                                    {item.desc}
                                                </div>
                                                <div className='flex gap-10'>
                                                    <div className='btn mt-10 h-[57px] w-[228px] text-[20px] px-[16px]'>
                                                        <Link to="/form">
                                                            Chat With Us
                                                        </Link>
                                                    </div>

                                                    <div className='radius pricingM-btn2 mt-10 h-[57px] w-[228px] text-[20px] px-[16px]'>
                                                        <Link to="/contactus">
                                                            Send Enquiry
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <ClientReview />
                </div>
                <HaveAQues />
            </div>
        </>
    )
}

export default PricingMain