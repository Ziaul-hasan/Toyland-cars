/* eslint-disable no-unused-vars */
import React from 'react';

const Toytable = ({ toy }) => {
    const { _id, picture, name, sellerName, price, quantity, subcategory } = toy || {}
    return (
        <tr>
            <td>
                <div className=' md:p-5'>
                    <img className='w-20 h-12 md:w-40 md:h-32 rounded-3xl' src={picture} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td className='text-slate-600 font-secularOne capitalize text-sm md:text-lg'>
                <p>{name}</p>
            </td>
            <td className='text-slate-600 font-secularOne capitalize text-sm md:text-lg text-center'>{subcategory}</td>
            <td className='text-slate-600 font-secularOne capitalize text-sm md:text-lg'>{sellerName}</td>
            <td className='text-slate-600 font-secularOne capitalize text-sm md:text-lg text-center'>{quantity}</td>
            <td className='text-slate-600 font-secularOne capitalize text-sm md:text-lg text-center'>$ {price}</td>
            <th className='text-end'>
                <button className="btn btn-sm md:btn-md bg-lime-600 border-0 font-secularOne font-medium">details</button>
            </th>
        </tr>

    );
};

export default Toytable;