/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './About.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from '../../../../assets/abs-1.jpg'
import img2 from '../../../../assets/abs-2.jpg'
import img3 from '../../../../assets/abs-3.jpg'
import img4 from '../../../../assets/abs-4.jpg'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const About = () => {
    return (
        <div className='grid md:grid-cols-2 gap-10 w-5/6 md:3/5 mx-auto mt-20 mb-10 items-center'>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="aboutSwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <h1 className='text-2xl md:text-6xl font-semibold md:font-bold font-paytonOne text-slate-600 line'>WELCOME TO <span className='text-yellow-400'>TOYLAND CARS</span> !!</h1>
                <p className='text-base md:text-lg font-medium line my-5'>Welcome to The Toy Shop, a treasure trove of children's toys, games, and gifts. Our aim was to create a magical space for kids (and kids at heart), where they could touch, feel, play and interact with the toys they see. To create an experience, not just a shopping trip. To supply our valued customer with toys of the highest quality and value for money. Our experienced and knowledgeable staff love guiding customers to the perfect gift. You can also upload your toy to display here and sell.</p>
                <button className='btn bg-lime-500 border-0 font-secularOne'>Add your toy</button>
            </div>
        </div>
    );
};

export default About;