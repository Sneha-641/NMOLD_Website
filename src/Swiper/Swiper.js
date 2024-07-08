
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './swiper.css'
import 'swiper/css/navigation';
import IMG from "../assets/Rectangle3846.png"
import IMG2 from "../assets/Polygon1.png"
import { click } from '@testing-library/user-event/dist/click';
const Slider = ({ slides }) => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      centeredSlides={true}
      slidesPerView={1}
      // navigation
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        // depth: 100,
        modifier: 1,
        slideShadows: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },

      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, ind) => (
        <SwiperSlide key={ind}>
          <div className='bg-white w-[633px] h-[361px] m-20'>
            <div className='text-[#303030] text-[24px] p-8 font-semibold'>
              It was a very good experience
            </div>
            <div className='px-6' style={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "21.6px",
              textAlign: "center",

            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
            </div>
            <div className='w-full text-center flex justify-center overflow-visible mt-12'>
              <div className='h-[80px] w-[80px] text-center overflow-visible pt-[2.5rem]'>
                <img src={IMG2} className='h-[80px] w-[80px] z-[100]' />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider