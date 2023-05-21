/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const ToyCard = ({ toy }) => {
    useEffect(()=> {
        AOS.init({duration: 1000});
    }, [])

    const { _id, picture, name, price, rating } = toy || {}
    return (
        <div className='p-5 shadow-xl shadow-slate-300 my-5' data-aos="zoom-in">
            <img className='w-full h-[300px] rounded-lg mb-5 object-fill' src={picture} alt="" />
            <h2 className='text-lg md:text-3xl font-secularOne font-semibold text-slate-600'>{name}</h2>
            <p className='text-base md:text-lg font-medium font-secularOne text-slate-600 my-3'>Price: <span className='text-red-600'> ${price}</span></p>
            <div className='flex items-center space-x-2 my-3'>
                <p className='text-base md:text-lg font-medium font-secularOne text-slate-600'>Ratings:</p>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                />
                <span className='text-base md:text-lg font-medium font-secularOne text-red-600'>{rating}</span>
                
            </div>
            
            <div>
                <Link to={`/toydetails/${_id}`}><button className='btn btn-block bg-red-600 border-0 font-secularOne'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ToyCard;