import React from 'react'

import Slider from "../Swiper/Swiper";
import slides from "../Swiper/Images.json";
import IMG1 from '../assets/e12.png'
import IMG2 from '../assets/e13.png'
import IMG5 from '../assets/Image1.png'
import IMG3 from '../assets/e14.png'
import IMG4 from '../assets/e15.png'
const ClientReview = () => {
    const [imgs, setimgs] = React.useState([
        IMG1, IMG2,IMG5, IMG3, IMG4, 
    ]);
    const [sec,setsec]=React.useState(0);
    const func = () => {
        let temp = imgs[0];
        var imgs2 = imgs;
        for (let i = 0; i < imgs.length - 1; i++) {
            imgs2[i] = imgs2[i + 1];
        }
        imgs2[imgs2.length - 1] = temp;
        setimgs(imgs2);
        setsec((sec+1)%2);
    }
    React.useEffect(() => {
        console.log(sec);
        setTimeout(func, 2800);
    }, [sec])
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
            <div className='flex w-full gap-[2rem] justify-center items-center'>
                {imgs.map((item, index) => {
                    return (
                        <div className='flex justify-center items-center'>
                            <img src={item} className={` ${index==(Math.ceil(imgs.length/2-1))?" h-[106px] w-[106px] ":" h-[60.74px] w-[60.74px] "}`} />
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}

export default ClientReview