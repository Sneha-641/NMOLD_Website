import React from 'react'
import IMG1 from '../assets/Image3.png'
import IMG2 from '../assets/Image4.png'
import IMG3 from '../assets/circle-check.png'
import IMG4 from '../assets/flag.png'
import IMG5 from '../assets/bulb_fill.png'
import IMG6 from '../assets/people-multiple.png'
import G1 from "../assets/Group01.png"
import G2 from "../assets/IconBox.png"
import G3 from "../assets/IconBox2.png"
import G4 from "../assets/IconBox3.png"
import G5 from "../assets/IconBox4.png"
import "../styles/AboutUs.css"
import AnimatedNumbers from "react-animated-numbers";
import ContactUs from './ContactUs'
import HaveAQues from './HaveAQues'
import { Link } from 'react-router-dom'
const AboutUs = () => {
    return (
        <>
            <div className='max-sm:w-full  max-sm:flex max-sm:flex-col max-sm:max-sm:items-center max-sm:justify-center'>
                <div className=' max-[780px]:items-center h-[524px] max-[780px]:h-[100vh] max-[520px]:h-[70vh] pt-[5rem] max-[1100px]:w-[90%]  max-[860px]:w-[97%]'>
                    <div className='h-[431px] flex justify-around items-center max-[780px]:flex-col max-[780px]:items-center'>
                        <div className='h-[431px] w-[674px] max-[600px]:w-[98%] max-[600px]:h-[auto] min-[780px]:hidden'>
                            <img src={IMG1} alt="" className='max-[600px]:w-[98%] max-[600px]:h-[auto]' />
                        </div>
                        <div className='h-[431px] w-[468px] max-sm:w-[100%]'>
                            <div className='About-sub-h max-[630px]:text-[25px]'>
                                The Story of NMOLD
                            </div>
                            <div className='min-[630px]:About-sub1 mt-[1.4rem] pricingM-subpart3'>
                                A revolutionary non-traditional marketing firm which operates on a simple principle, Result-oriented campaigns. We solve real-life business problems that traditional agencies cannot.
                            </div>
                            <div className='flex gap-10 mt-[3rem]'>
                                <div className='btn radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex'>
                                    <Link to="/ourservices">
                                        Explore our Services
                                    </Link>
                                </div>
                                <div className='text-[var(--theme)] border-[var(--theme)] border-[1px] radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex justify-center items-center'>
                                    <Link to="/contactus"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='h-[431px] w-[674px] max-[600px]:w-[98%] max-[600px]:h-[auto] max-[780px]:hidden'>
                            <img src={IMG1} alt="" className='max-[600px]:w-[98%] max-[600px]:h-[auto]' />
                        </div>
                    </div>

                </div>

                <div className=' max-[780px]:mt-[8rem] max-[630px]:mt-[-2rem]'>
                    <div className='heading text-center mt-[6rem] max-[630px]:text-[25px]'>
                        Some Facts About Us
                    </div>
                    <div className='About-sub4 text-[10px]'>
                        We are spilling facts. We have been serving our clients out of our way with out-of-the-box ideas.
                    </div>
                    <div className=''>
                        <div className='flex justify-center items-center gap-6 mt-10 animatedstats-main'>
                            <div className='About-box-54 flex flex-col justify-center items-center '>
                                <div className='About-sub55 flex '>
                                    <AnimatedNumbers
                                        includeComma
                                        // className={styles.container}
                                        transitions={(index) => ({
                                            type: "spring",
                                            duration: index + 5.3,
                                        })}
                                        animateToNumber={200}
                                        fontStyle={{
                                            fontSize: 50,
                                            color: "rgb(0, 0, 0)",
                                            fontWeight: 500,
                                            textAlign: "center",
                                        }}
                                    /><span className='text-[var(--theme)]'>$ms</span>
                                </div>
                                <div className='About-sub-56'>
                                    Worth GMV delivered
                                </div>
                            </div>
                            <div className='About-box-54 flex flex-col justify-center items-center'>
                                <div className='About-sub55 flex'>
                                    <AnimatedNumbers
                                        includeComma
                                        // className={styles.container}
                                        transitions={(index) => ({
                                            type: "spring",
                                            duration: index + 5.3,
                                        })}
                                        animateToNumber={2}
                                        fontStyle={{
                                            fontSize: 50,
                                            color: "rgb(0, 0, 0)",
                                            fontWeight: 500,
                                            textAlign: "center",
                                        }}
                                    /> <span className='text-[var(--theme)]'>years</span>
                                </div>
                                <div className='About-sub-56'>
                                    Founded sice 2022
                                </div>
                            </div>
                            <div className='About-box-54 flex flex-col justify-center items-center'>
                                <div className='About-sub55 flex'>
                                    <AnimatedNumbers
                                        includeComma
                                        // className={styles.container}
                                        transitions={(index) => ({
                                            type: "spring",
                                            duration: index + 5.3,
                                        })}
                                        animateToNumber={50}
                                        fontStyle={{
                                            fontSize: 50,
                                            color: "rgb(0, 0, 0)",
                                            fontWeight: 500,
                                            textAlign: "center",
                                        }}
                                    /> <span className='text-[var(--theme)]'>+</span>
                                </div>
                                <div className='About-sub-56'>
                                    Clients
                                </div>
                            </div>
                            <div className='About-box-54 flex flex-col justify-center items-center'>
                                <div className='About-sub55 flex'>
                                    <AnimatedNumbers
                                        includeComma
                                        // className={styles.container}
                                        transitions={(index) => ({
                                            type: "spring",
                                            duration: index + 5.3,
                                        })}
                                        animateToNumber={300}
                                        fontStyle={{
                                            fontSize: 50,
                                            color: "rgb(0, 0, 0)",
                                            fontWeight: 500,
                                            textAlign: "center",
                                        }}
                                    /> <span className='text-[var(--theme)]'>+</span>
                                </div>
                                <div className='About-sub-56'>
                                    Projects Delivered
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-[524px] pt-[1rem] mt-[6rem]'>
                        <div className='h-[431px] flex justify-center gap-[4.5rem] items-center'>

                            <div className='h-[431px] w-[674px]'>
                                <img src={IMG2} alt="" />
                            </div>
                            <div className='h-[411px] w-[468px]'>

                                <div className='About-sub-h'>
                                    How Company Started
                                </div>
                                <div className='About-sub1 mt-[1.4rem]'>
                                    We are a 360-degree marketing agency, offering out-of-the-box and bespoke solutions to our clients. We unlike traditional agencies operate primarily on result-oriented models to unleash Hyper-growth within a short period of time.. Get in touch today
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
                {/* <div className='mt-[4rem]'>
                    <div className='heading'>
                        OUR VALUES
                    </div>
                    <div className='About-sub4'>
                        We hold our ethics, values and work culture to the highest standards and hold a professional work culture which refelts in our work.
                    </div>
                    <div className='flex justify-center items-center gap-[1.5rem] mt-10'>
                        <div className='w-[291px] h-[448px] About-box-border flex flex-col justify-center items-center'>
                            <div className='flex justify-start items-start w-[80%] mb-3'>

                                <div className='h-[50px] w-[50px] text-left float-left'>
                                    <img src={IMG3} alt="" className='float-left text-left' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center mb-3'>

                                <div className='w-[229px]' style={{
                                    fontSize: "35px",
                                    fontWeight: "700",
                                    lineHeight: "56px",
                                    textAlign: "left",
                                }}>
                                    Commitment
                                </div>
                                <div className='About-sub43 font-[400] w-[219px] text-justify'>
                                    We are truly committed to going above and beyond traditional working scenarios. This ensures excellent growth and maximized ROI.
                                </div>
                            </div>
                        </div>
                        <div className='w-[291px] h-[448px] About-box-border flex flex-col justify-center items-center'>
                            <div className='flex justify-start items-start w-[80%] mb-3'>

                                <div className='h-[50px] w-[50px] text-left float-left'>
                                    <img src={IMG4} alt="" className='float-left text-left' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center mb-3'>

                                <div className='w-[229px]' style={{
                                    fontSize: "35px",
                                    fontWeight: "700",
                                    lineHeight: "56px",
                                    textAlign: "left",
                                }}>
                                    Ownership
                                </div>
                                <div className='About-sub43 font-[400] w-[219px] text-justify'>
                                    We are truly committed to going above and beyond traditional working scenarios. This ensures excellent growth and maximized ROI.
                                </div>
                            </div>
                        </div>
                        <div className='w-[291px] h-[448px] About-box-border flex flex-col justify-center items-center'>
                            <div className='flex justify-start items-start w-[80%] mb-3'>

                                <div className='h-[50px] w-[50px] text-left float-left'>
                                    <img src={IMG5} alt="" className='float-left text-left' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center mb-3'>

                                <div className='w-[229px]' style={{
                                    fontSize: "35px",
                                    fontWeight: "700",
                                    lineHeight: "56px",
                                    textAlign: "left",
                                }}>
                                    Innovation
                                </div>
                                <div className='About-sub43 font-[400] w-[219px] text-justify'>
                                    We are truly committed to going above and beyond traditional working scenarios. This ensures excellent growth and maximized ROI.
                                </div>
                            </div>
                        </div>
                        <div className='w-[291px] h-[448px] About-box-border flex flex-col justify-center items-center'>
                            <div className='flex justify-start items-start w-[80%] mb-3'>

                                <div className='h-[50px] w-[50px] text-left float-left'>
                                    <img src={IMG6} alt="" className='float-left text-left' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center mb-3'>

                                <div className='w-[229px]' style={{
                                    fontSize: "35px",
                                    fontWeight: "700",
                                    lineHeight: "56px",
                                    textAlign: "left",
                                }}>
                                    Transparency
                                </div>
                                <div className='About-sub43 font-[400] w-[219px] text-justify'>
                                    We are truly committed to going above and beyond traditional working scenarios. This ensures excellent growth and maximized ROI.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className='mt-[6rem]'>
                    <div className='heading'>
                        The Founding Member NMOLD
                    </div>
                    <div className=' flex justify-center mt-10'>
                        <div className='w-[310px] h-[447px] bg-white border-[2px] border-[#DCDCDC] flex flex-col justify-center items-center'>
                            <div className='w-[229px] h-[210px]'>
                                <img src={G1} alt="" />
                            </div>
                            <div className='px-7 flex flex-col justify-center items-center mt-3'>
                                <div className='' style={{
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    lineHeight: "30px",
                                    textAlign: "center",

                                }}>
                                    Amanda Fisher
                                </div>
                                <div className='mt-2'
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "22px",
                                        textAlign: "center",

                                    }}>
                                    Title
                                </div>
                                <div className=''
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "22px",
                                        textAlign: "center",

                                    }}>
                                    There are many variations of passages of Lorem Ipsum available
                                </div>
                                <div className='flex gap-5 justify-center mt-5 items-center'>
                                    <img src={G2} alt="" />
                                    <img src={G3} alt="" />
                                    <img src={G4} alt="" />
                                    <img src={G5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[6rem]'>
                    <HaveAQues />
                </div> */}
            </div>
        </>
    )
}

export default AboutUs