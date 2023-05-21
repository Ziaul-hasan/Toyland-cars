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
    const [open, setOpen] = useState(false);

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


    const handleAscending = (p1, p2) => {
        setLoading(true)
        fetch(`https://assignment-toy-marketplace-server.vercel.app/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                const result = data.sort((a, b) => a.price - b.price)
                setLoading(false)
                setMytoys(result)
                setOpen(!open)
            })
    }

    const handleDescending = (p1, p2) => {
        setLoading(true)
        fetch(`https://assignment-toy-marketplace-server.vercel.app/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                const result = data.sort((a, b) => b.price - a.price)
                setLoading(false)
                setMytoys(result)
                setOpen(!open)
            })
    }
    return (
        <>
            <div className='bg-img2 flex items-center justify-center ps-10'>
                <h1 className='text-2xl md:text-8xl font-paytonOne text-base-300'>My <span className='text-yellow-400'>Collection</span></h1>
            </div>

                <div className='flex items-center justify-end my-4 me-10 md:me-20 space-x-3'>
                    <h2 className='text-lg md:text-xl font-secularOne font-semibold text-slate-500'>Sort by Price</h2>
                    {
                        (open === true) ? <button onClick={handleAscending} className='btn bg-lime-600 border-0'>Ascending</button> : <button onClick={handleDescending} className='btn bg-lime-600 border-0'>Descending</button>
                    }
                </div>
            <div className='mx-5 p-4 md:mx-20 mt-5 mb-10 shadow-lg rounded-lg overflow-x-auto'>
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
                    {
                        loading ? <div className='flex justify-center items-center h-[500px]'><h2 className='text-3xl font-normal'>Pr</h2><div className='w-6 h-6 border-4 md:w-10 md:h-10 md:border-8 border-dashed rounded-full border-blue-500 animate-spin'></div><h2 className='text-3xl font-normal'>cessing</h2></div>
                            :
                            <tbody>
                                {
                                    myToys?.map(myToy => <MytoyTable key={myToy._id} myToy={myToy} handleDelete={handleDelete} setToyUpdate={setToyUpdate} setUpdate={setUpdate} update={update}></MytoyTable>)
                                }
                            </tbody>
                    }
                </table>

            </div>
            {
                toyUpdate && <UpdateModal toy={toyUpdate} loading={loading} setUpdate={setUpdate} update={update}></UpdateModal>
            }


        </>
    );
};

export default MyTos;