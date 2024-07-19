import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
const Navbar = ({ state, setState }) => {
    console.log(window.location.pathname);
    const [loc, changeloc] = React.useState("/")
    React.useEffect(() => {
        changeloc(window.location.pathname); if (loc === "/") setState(0);
        if (loc === "/aboutus") setState(1);
        if (loc === "/ourservices") setState(2);
        if (loc === "/pricing") setState(3);
        if (loc === "/contactus") setState(4); console.log(window.location.pathname)
    }, [loc])
    return (
        <>
            <div className='w-full h-[74px] flex justify-evenly items-center '>
                <div className='flex gap-[160px]'>
                    <img src={Logo} className='h-[34px] cursor-pointer' />
                </div>
                <div className='flex w-[50%] justify-evenly h-[26px] text-[16px] font-[500]'>
                    <div className={`${state === 0 ? "active-color" : ""} cursor-pointer`} onClick={() => setState(0)}><Link to="/">
                        Home
                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 1 ? "active-color" : ""}`} onClick={() => setState(1)}><Link to="/aboutus">
                        About

                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 2 ? "active-color" : ""}`} onClick={() => setState(2)}><Link to="/ourservices">
                        Services
                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 3 ? "active-color" : ""}`} onClick={() => setState(3)}><Link to="/pricing">
                        Pricing
                    </Link></div>
                    <div className={`text-[16px] cursor-pointer ${state === 4 ? "active-color" : ""}`} onClick={() => setState(4)}><Link to="/contactus">
                        Contact
                    </Link></div>
                </div>
                <div className='flex gap-[23px]'>
                    <div className='btn px-[12px] py-[9px] gap-[10px] cursor cursor-pointer  ' onClick={()=>{
                        // add calling function
                        window.location.href = 'tel:+919876543210';
                        
                    }}>+91 9876543210</div>
                    <div className='radius text-[white] bg-black px-[19px] py-[9px]' onClick={()=>{
                        window.location.href = 'meetingform'
                    }}>Schedule Meeting</div>
                </div>
            </div>
        </>
    )
}

export default Navbar