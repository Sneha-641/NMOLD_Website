import React from 'react'

import Slider from "../Swiper/Swiper";
import slides from "../Swiper/Images.json";
const ClientReview = () => {
    return (
        <div className='w-full mb-[10rem]'>
            <div className='flex justify-center'>
                <div className='' style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    lineHeight: "43.2px",
                    textAlign: "center",
                    color: "#525252"
                }}>
                    Here is what our Clients are saying About us
                </div>
            </div>
            <div className='flex justify-center items-center cursor-pointer'>
                <div className='text-[94px] text-[#4F45EB]'>
                    &lt;
                </div>
                <div className='w-[850px]'>
                    <Slider slides={slides} />
                </div>
                <div className='text-[94px] text-[#4F45EB]'>
                    &gt;
                </div>
            </div>
        </div>
    )
}

export default ClientReview