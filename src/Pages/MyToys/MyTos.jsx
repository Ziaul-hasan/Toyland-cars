/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MytoyTable from './MytoyTable/MytoyTable';

const MyTos = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMytoys] = useState([])

    const url = `http://localhost:5000/toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMytoys(data))
    }, [url])
    return (
        <>
            <div>
                <h2>all toys will show here</h2>
            </div>
            <div className='mx-5 md:mx-20 my-10 shadow-lg rounded-lg'>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>Delete</th>
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
                            myToys?.map(myToy => <MytoyTable key={myToy._id} myToy={myToy}></MytoyTable>)
                        }
                    </tbody>
                </table>

            </div>

        </>
    );
};

export default MyTos;