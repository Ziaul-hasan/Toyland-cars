/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MytoyTable = ({ myToy, handleDelete, setToyUpdate }) => {

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
                <Link className='block' to={`/toydetails/${_id}`}><button className="btn btn-sm md:btn-md bg-lime-600 border-0 font-secularOne font-medium">details</button></Link>
                {/* <Link className='block' to={`/toyupdate/${_id}`}><button className="btn btn-sm md:btn-md bg-lime-600 border-0 font-secularOne font-medium">update</button></Link> */}
                {/* The button to open modal */}
                <label onClick={() => setToyUpdate(myToy)} htmlFor="my-modal-3" className="btn btn-sm md:btn-md bg-lime-600 border-0 font-secularOne font-medium">update</label>

                {/* Put this part before </body> tag */}
                
            </th>
        </tr>
    );
};

export default MytoyTable;