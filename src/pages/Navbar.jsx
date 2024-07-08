import React from 'react'
import Logo from '../assets/Logo.png'
const Navbar = () => {
    return (
        <>
            <div className='w-full h-[74px] flex justify-evenly items-center '>
                <div className='flex gap-[160px]'>
                    <img src={Logo} className='h-[34px]' />
                </div>
                <div className='flex w-[50%] justify-evenly h-[26px] text-[16px] font-[500]'>
                    <div className='active-color cursor-pointer'>Home</div>
                    <div className='text-[16px] cursor-pointer'>About</div>
                    <div className='text-[16px] cursor-pointer'>Services</div>
                    <div className='text-[16px] cursor-pointer'>Pricing</div>
                    <div className='text-[16px] cursor-pointer'>Contact</div>
                </div>
                <div className='flex gap-[23px]'> 
                    <div className='btn px-[12px] py-[9px] gap-[10px]'>+91 9876543210</div>
                    <div className='radius text-[white] bg-black px-[41px] py-[9px]'>Log-in</div>
                </div>
            </div>
        </>
    )
}

export default Navbar