/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from '../../../assets/slider-1.jpg';
import img2 from '../../../assets/slider-2.jpg';
import img3 from '../../../assets/slider-3.jpg';
import img4 from '../../../assets/slider-4.jpg';


// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='' src={img1} alt="" />
                        <div className='absolute z-10 flex justify-center text-center items-center bottom-0 top-0 right-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 19, 19, 0)]'>
                            <div className='w-4/5 md:w-3/5 space-y-8 '>
                                <h1 className='text-lg md:text-5xl text-white font-medium md:font-bold uppercase leading-snug font-paytonOne'>Toys are put on this Earth <span className='text-yellow-300'>to be played with by a child</span>.</h1>
                                <button className='btn bg-lime-500 font-secularOne font-medium md:font-semibold border-0'>Learn more about toys</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='' src={img2} alt="" />
                        <div className='absolute z-10 flex justify-center text-center items-center bottom-0 top-0 right-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 19, 19, 0)]'>
                            <div className='w-4/5 md:w-3/5 space-y-8 '>
                                <h1 className='text-lg md:text-5xl text-white font-medium md:font-bold uppercase leading-snug font-paytonOne'>Toys are made in heaven, <span className='text-yellow-300'>batteries are made in hell</span>.</h1>
                                <button className='btn bg-lime-500 font-secularOne font-medium md:font-semibold border-0'>Learn more about toys</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='' src={img3} alt="" />
                        <div className='absolute z-10 flex justify-center text-center items-center bottom-0 top-0 right-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 19, 19, 0)]'>
                            <div className='w-4/5 md:w-3/5 space-y-8 '>
                                <h1 className='text-lg md:text-5xl text-white font-medium md:font-bold uppercase leading-snug font-paytonOne'>Don't take your toys inside just <span className='text-yellow-300'> because it's raining.</span>.</h1>
                                <button className='btn bg-lime-500 font-secularOne font-medium md:font-semibold border-0'>Learn more about toys</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='' src={img4} alt="" />
                        <div className='absolute z-10 flex justify-center text-center items-center bottom-0 top-0 right-0 left-0 bg-gradient-to-r from-[#080808] to-[rgba(21, 21, 21)]'>
                            <div className='w-4/5 md:w-3/5 space-y-8 '>
                                <h1 className='text-lg md:text-5xl text-white font-medium md:font-bold uppercase leading-snug font-paytonOne'>I feel like a little boy who is  <span className='text-yellow-300'>constantly offered new toys</span>.</h1>
                                <button className='btn bg-lime-500 font-secularOne font-medium md:font-semibold border-0'>Learn more about toys</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;