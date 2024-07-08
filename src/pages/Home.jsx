import React from 'react'
import Navbar from './Navbar'
import '../styles/home.css'
import IMGC from "../assets/Image_content.png"
const Home = () => {
  return (
    <>
      <div className=''>
        <div className='h-[620px]'>
          <div className='w-full text-center justify-center m-auto flex mt-[8px]'>
            <div className='flex justify-center items-center h-[76px] w-[637px] px-[24px] bg-white home-search-main radius'>
              <input
                className='w-[80%]'
                placeholder='Enter Your Email'
              />
              <div className='btn float-right w-[140px] h-[46px] flex items-center text-center justify-center textsize'>
                Search
              </div>
            </div>
          </div>
          <div className='h-[420px] m-[8px] flex pl-[5rem] gap-[5rem] pt-[3rem] '>
            <div className='w-[734px]'>
              <div className='text-[64px] font-bold home-sub-head'>
              Custom Product & Software Development Focused On Your Sucess
              </div>
              <div className=''>
                <div className='btn text-[20px] px-[16px] w-[186px] h-[56px] mt-[1rem]'>
                  Contact Us
                </div>
              </div>
            </div>
            <div className='w-[550px]'>
              <img src={IMGC} alt='image' className='w-[550px] h-[420px] mr-0 pr-0 float-right' />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home