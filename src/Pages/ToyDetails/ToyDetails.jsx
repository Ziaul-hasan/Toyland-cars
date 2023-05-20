/* eslint-disable no-unused-vars */
import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    const { _id, picture, name, price, rating, sellerName, sellerEmail, description, quantity, subcategory } = singleToy || {}
    return (
        <div>
            <div className='bg-img2'>
                <h2>Details information of {name}</h2>
            </div>
            <div>
                <div className='flex flex-col md:flex-row justify-between items-center w-4/5 md:3/5 p-3 md:p-8 mx-auto md:space-x-10 my-5 md:my-12 rounded-lg shadow-xl border border-slate-400'>
                    <div className='w-full md:w-3/5'>
                        <img src={picture} alt="" />
                    </div>
                    <div className='w-full md:w-2/5'>
                        <h2 className='text-xl md:text-3xl font-secularOne font-semibold text-slate-600'>{name}</h2>
                        <p className='text-lg md:text-xl font-medium font-secularOne text-slate-600 my-3'>Seller Name: <span className='ms-3'>{sellerName}</span></p>
                        <p className='text-lg md:text-xl font-medium font-secularOne text-slate-600 my-3'>Seller Email: <span className='ms-3'>{sellerEmail}</span></p>
                        <p className='text-lg md:text-xl font-medium font-secularOne text-slate-600 my-3'>Subcategory: <span className='ms-3'>{subcategory}</span></p>
                        <p className='text-lg md:text-xl font-medium font-secularOne text-slate-600 my-3'>Price: <span className='text-red-600 ms-3'> ${price}</span></p>
                        <p className='text-lg md:text-xl font-medium font-secularOne text-slate-600 my-3'>Quantity: <span className='ms-3'>{quantity}</span></p>
                        <p className='text-lg md:text-xl font-medium font-secularOne text-slate-600 my-3'>Description: <span className='ms-3 font-normal'>{description}</span></p>
                        <div className='flex items-center space-x-2 my-3'>
                            <p className='text-base md:text-lg font-medium font-secularOne text-slate-600'>Ratings:</p>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                            <span className='text-base md:text-lg font-medium font-secularOne text-red-600'>{rating}</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;