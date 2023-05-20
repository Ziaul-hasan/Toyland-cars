/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Toytable from './Toytable/Toytable';

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <>
            <div>
                <h2>all toys will show here</h2>
            </div>
            <div className='mx-5 md:mx-20 my-10 shadow-lg rounded-lg overflow-x-auto'>
                <table className="table w-full table-normal z-0">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>Picture</th>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>Name</th>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>Sub-category</th>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>seller name</th>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>Available Qty</th>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>Price</th>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>Show more</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map(toy => <Toytable key={toy._id} toy={toy}></Toytable>)
                        }
                    </tbody>
                </table>

            </div>

        </>
    );
};

export default AllToys;