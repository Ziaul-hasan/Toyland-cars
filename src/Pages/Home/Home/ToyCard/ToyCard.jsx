/* eslint-disable no-unused-vars */
import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyCard = ({ toy }) => {
    const { _id, picture, name, price, rating } = toy || {}
    return (
        <div className='p-5 shadow-xl shadow-slate-300 my-5'>
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
                <span className='text-base md:text-lg font-medium font-secularOne text-slate-600'>{rating}</span>
                
            </div>
            
            <div>
                <button className='btn btn-block'>View Details</button>
            </div>
        </div>
    );
};

export default ToyCard;