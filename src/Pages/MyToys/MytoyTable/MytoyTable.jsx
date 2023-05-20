/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MytoyTable = ({ myToy, handleDelete }) => {
    const { _id, picture, name, sellerName, price, quantity, subcategory } = myToy || {}
    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="p-2 border-2 border-lime-600 rounded-full">
                    <FaTrashAlt className='text-red-600 text-2xl'></FaTrashAlt>
                </button>
            </td>
            <td>
                <div className='md:p-5'>
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
            <th className='text-end space-y-3'>
                <button className="btn btn-sm md:btn-md bg-lime-600 border-0 font-secularOne font-medium block">details</button>
                <button className="btn btn-sm md:btn-md bg-lime-600 border-0 font-secularOne font-medium block">update</button>
            </th>
        </tr>
    );
};

export default MytoyTable;