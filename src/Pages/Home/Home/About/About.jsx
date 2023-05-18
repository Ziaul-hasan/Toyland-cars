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
        <div className='grid md:grid-cols-2 gap-5 w-4/5 md:3/5 mx-auto mt-20 mb-10'>
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
                <h1>WELCOME TO THE TOYLAND CARS!</h1>
                <p>Welcome to The Toy Shop, a treasure trove of children's toys, games, and gifts. Our aim was to create a magical space for kids (and kids at heart), where they could touch, feel, play and interact with the toys they see. To create an experience, not just a shopping trip. To supply our valued customer with toys of the highest quality and value for money. Our experienced and knowledgeable staff love guiding customers to the perfect gift. You can also upload your toy to display here and sell.</p>
                <button>Add your toy</button>
            </div>
        </div>
    );
};

export default About;