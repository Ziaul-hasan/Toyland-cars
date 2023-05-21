/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MytoyTable from './MytoyTable/MytoyTable';
import Swal from 'sweetalert2';
import UpdateModal from './UpdateModal/UpdateModal';

const MyTos = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMytoys] = useState([])
    const [toyUpdate, setToyUpdate] = useState(null)
    const [loading, setLoading] = useState(false)
    const [update, setUpdate] = useState(false)

    const url = `https://assignment-toy-marketplace-server.vercel.app/toys?email=${user?.email}`
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMytoys(data)
            })
    }, [url, update])

    const handleDelete = id => {
        console.log('hit delete button', id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-toy-marketplace-server.vercel.app/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys?.filter(myToy => myToy._id !== id)
                            setMytoys(remaining)
                        }
                    })

            }
        })
    }
    return (
        <>
            <div className='bg-img2 flex items-center justify-center ps-10'>
                <h1 className='text-2xl md:text-8xl font-paytonOne text-base-300'>My <span className='text-yellow-400'>Collection</span></h1>
            </div>
            <div className='mx-5 md:mx-20 my-10 shadow-lg rounded-lg overflow-x-auto'>
                <table className="table w-full table-normal z-0">
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
                            myToys?.map(myToy => <MytoyTable key={myToy._id} myToy={myToy} handleDelete={handleDelete} setToyUpdate={setToyUpdate} setUpdate={setUpdate} update={update}></MytoyTable>)
                        }
                    </tbody>
                </table>

            </div>
            {
                toyUpdate && <UpdateModal toy={toyUpdate} loading={loading}></UpdateModal> 
            }


        </>
    );
};

export default MyTos;