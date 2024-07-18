import React from 'react';
import "../styles/Footer.css";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from 'react-router-dom'
import F1 from "../assets/fb1.png"
import X from "../assets/Xlogo.png"
export const Footer = () => {
    const navigate = useNavigate()
    const goto = (link) => {
        navigate(link)
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className=' h-[336px]  flex justify-between px-[10rem] items-center w-full mt-[1rem]'>
                <div className='h-[210px]'>
                    <div className='h-[187px] w-[285px]'>
                        <img src={Logo} alt='Logo' className='h-[34px]' />
                        <div className='footer-content mt-[2rem]'>
                            We built an elegant solution. Our team believe that the success of our company is a result of our clients growth.
                        </div>
                        <br />
                        <br />
                        <div className='flex gap-4 cursor-pointer'>
                            <div className='  rounded-sm -full pt-[0px] px-[3px]'>
                            <svg fill="#0055ff" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#0055ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Linkedln"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z"></path> </g> </g></svg>

                            </div>
                            <div className=' rounded-full p-[3px]'>
                                <svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></svg>
                            </div>
                            <div className='rounded-full p-[3px]'>
                                <svg width="24px" height="24px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
                            </div>

                            <div className='rounded-full p-[3px]'>
                            <img src={X} alt='X' className='h-[24px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='w-[406px] flex gap-[156px]'>
                        <div className=''>
                            <div className='w-[100px]'>
                                <div className='text-[#060336] mb-3 text-[16px]' style={{ fontWeight: "600", fontSize: "15px", lineHeight: "22.4px" }}>Explore</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}><div onClick={()=>{goto("/")}}>
                                    Home
                                </div></div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}><div onClick={()=>{goto("/aboutus")}}>


                                    About Us
                                </div>
                                </div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}><div onClick={()=>{goto("/ourservices")}}>


                                    Services
                                </div>
                                </div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}><div onClick={()=>{goto("/pricing")}}>


                                    Pricing
                                </div>
                                </div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}><div onClick={()=>{goto("/contactus")}}>


                                    Contact Us
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='w-[150px]'>
                                <div className='text-[#060336] mb-3 ' style={{ fontWeight: "600", fontSize: "15px", lineHeight: "22.4px" }}>Help Center</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}>Community</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}>Knowledge</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}>
                                <Link to="/termsandconditions">
                                Terms and Conditions
                                </Link>
                                </div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}><Link to="/privacy">
                                Privacy
                                </Link></div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{ fontWeight: "400", fontSize: "14px", lineHeight: "22.4px" }}>Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
