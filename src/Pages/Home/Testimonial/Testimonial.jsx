/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import man1 from '../../../assets/man-1.jpg'
import man2 from '../../../assets/man-2.jpg'
import man3 from '../../../assets/man-3.jpg'
import woman1 from '../../../assets/woman-1.jpg'
import woman2 from '../../../assets/women-2.jpg'
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='md:mt-10 py-5 bgslide'>
            <h1 className='text-2xl md:text-5xl font-semibold md:font-bold font-paytonOne text-slate-600 text-center mt-10'>What People Say About ToylandCars </h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    }
                }}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="testimonialSwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col md:mt-16 p-5 w-4/5 mx-auto rounded-xl shadow-xl bg-yellow-400 bg-opacity-20 h-[400px]'>
                        <p className='text-base font-secularOne font-medium text-slate-500 my-4'>This store's selection is out of this world. Clearly they live and love what they do. I went for sedan toy car and was blown away by the selection. The rest of the store was a sight to see, between high quality toys, and just-to-look-at large models suspended above. I will be back!</p>
                        <div className='flex space-x-4 items-center my-5 mt-auto'>
                            <div><img className='w-16 h-16 rounded-full' src={man1} alt="" /></div>
                            <div>
                                <h1 className='text-lg font-paytonOne font-medium text-slate-700'>Harry Potter</h1>
                                <h2 className='textbase font-secularOne font-normal text-lime-500'>Sneekers widget</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:mt-16 p-5 w-4/5 mx-auto rounded-xl shadow-xl bg-yellow-400 bg-opacity-20 h-[400px]'>
                        <p className='text-base font-secularOne font-medium text-slate-500 my-4'>I rate it a 5 star because my son loves it! He buys the Law Enforcement vehicles and the fire trucks! He also buys the train sets they sell and the workers let him see the trains moving! Thank you for the kindness! I hope you become a very successful company one day!</p>
                        <div className='flex space-x-4 items-center my-5 mt-auto'>
                            <div><img className='w-16 h-16 rounded-full' src={woman1} alt="" /></div>
                            <div>
                                <h1 className='text-lg font-paytonOne font-medium text-slate-700'>Harmaini Grenja</h1>
                                <h2 className='textbase font-secularOne font-normal text-lime-500'>Wise Widget</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:mt-16 p-5 w-4/5 mx-auto rounded-xl shadow-xl bg-yellow-400 bg-opacity-20 h-[400px]'>
                        <p className='text-base font-secularOne font-medium text-slate-500 my-4'>Great quality merchandise. Always has been. Always had good customer service, too, which is always a good quality in businesses. That is why they have been in business so many years.</p>
                        <div className='flex space-x-4 items-center my-5 mt-auto'>
                            <div><img className='w-16 h-16 rounded-full' src={man2} alt="" /></div>
                            <div>
                                <h1 className='text-lg font-paytonOne font-medium text-slate-700'>Ron Wigely</h1>
                                <h2 className='textbase font-secularOne font-normal text-lime-500'>Chease Master</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:mt-16 p-5 w-4/5 mx-auto rounded-xl shadow-xl bg-yellow-400 bg-opacity-20 h-[400px]'>
                        <p className='text-base font-secularOne font-medium text-slate-500 my-4'>Great store! People are friendly. Fun place to visit. Pro tip: Park at the Webster bank over the bridge and walk over!</p>
                        <div className='flex space-x-4 items-center my-5 mt-auto'>
                            <div><img className='w-16 h-16 rounded-full' src={man3} alt="" /></div>
                            <div>
                                <h1 className='text-lg font-paytonOne font-medium text-slate-700'>Neval Logbutton</h1>
                                <h2 className='textbase font-secularOne font-normal text-lime-500'>Co-ordinator</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:mt-16 p-5 w-4/5 mx-auto rounded-xl shadow-xl bg-yellow-400 bg-opacity-20 h-[400px]'>
                        <p className='text-base font-secularOne font-medium text-slate-500 my-4'>Great place to go and have some fun..staff are great patient and always willing to help..I highly recommend this place for everone kids all ages....</p>
                        <div className='flex space-x-4 items-center my-5 mt-auto'>
                            <div><img className='w-16 h-16 rounded-full' src={woman2} alt="" /></div>
                            <div>
                                <h1 className='text-lg font-paytonOne font-medium text-slate-700'>Jeeny Wigely</h1>
                                <h2 className='textbase font-secularOne font-normal text-lime-500'>Ladies Leader</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Testimonial;