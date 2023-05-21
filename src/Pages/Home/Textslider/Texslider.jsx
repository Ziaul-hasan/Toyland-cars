/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper , SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Texslider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="textSwiper"
            >
                <SwiperSlide>
                    <div className=' md:mt-44 w-4/5 md:2/5 mx-auto text-center'>
                        <h1 className='text-lg md:text-4xl text-white font-medium md:font-bold uppercase font-paytonOne line'>A toy has no gender and no idea of whether  <span className='text-yellow-300'>a girl or boy is playing with it</span>.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mt-44 w-4/5 md:2/5 mx-auto text-center'>
                        <h1 className='text-lg md:text-4xl text-white font-medium md:font-bold uppercase font-paytonOne line'>At 20 years old, I was better at playing with toys  <span className='text-yellow-300'>than I was as a kid</span>.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mt-44 w-4/5 md:2/5 mx-auto text-center'>
                        <h1 className='text-lg md:text-4xl text-white font-medium md:font-bold uppercase font-paytonOne line'>To a child, often the box a toy came in is more appealing  <span className='text-yellow-300'>than the toy itself</span>.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mt-44 w-4/5 md:2/5 mx-auto text-center'>
                        <h1 className='text-lg md:text-4xl text-white font-medium md:font-bold uppercase font-paytonOne line'>The child's toys and the old man's reasons  <span className='text-yellow-300'>are the fruits of two seasons</span>.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mt-44 w-4/5 md:2/5 mx-auto text-center'>
                        <h1 className='text-lg md:text-4xl text-white font-medium md:font-bold uppercase font-paytonOne line'>A Toy A Day Keeps <span className='text-yellow-300'>Sadness Away</span>.</h1>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Texslider;