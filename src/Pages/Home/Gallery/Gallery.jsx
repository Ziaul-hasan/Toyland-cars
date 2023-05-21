/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import img1 from '../../../assets/custom add 10.jpg'
import img2 from '../../../assets/custom add 3.jpg'
import img3 from '../../../assets/custom add 5.jpg'
import img4 from '../../../assets/electric-toy-car-jeep-wrangler-rubicon-red.jpg'
import img5 from '../../../assets/tow truck.png'
import img6 from '../../../assets/TB2bU.lfnlYBeNjSszcXXbwhFXa__2234083242.jpg'
import img7 from '../../../assets/61VIGsSOshL.jpg'
import img8 from '../../../assets/42052-1-800x800.png'
import img9 from '../../../assets/5b0c58e8b3fb92848a8d94e9f5a1a6de.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Gallery = () => {
    useEffect(()=> {
        AOS.init({duration: 1000});
    }, [])

    return (
        <div className='my-5 md:my-20 w-4/5 mx-auto'>
            <h1 className='text-2xl md:text-5xl font-semibold md:font-bold font-paytonOne text-slate-600 text-center my-10'>Gallery Of Our Collection </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img1} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img2} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img3} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img4} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img5} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img6} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img7} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img8} alt="" />
                </div>
                <div className='p-3 shadow-lg rounded-xl' data-aos="zoom-out">
                    <img src={img9} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;