/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Toytable from './Toytable/Toytable';

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://assignment-toy-marketplace-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setToys(data)
            })
    }, [])

    const handleSearch = event => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value
        console.log(search)

        fetch(`https://assignment-toy-marketplace-server.vercel.app/searchToyByNameCategory/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    return (
        <>
            <div className='bg-img2 flex items-center justify-center ps-10'>
                <h1 className='text-2xl md:text-8xl font-paytonOne text-base-300'>Our <span className='text-yellow-400'>Collection</span></h1>
            </div>
            <form onSubmit={handleSearch}>
                <div className='flex justify-center my-5 space-x-4'>
                    <div className='form-control'>
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" name="search" placeholder='search by name or category' className='input input-bordered rounded-3xl text-center font-secularOne' id="" />
                    </div>
                    <div className='form-control'>
                        <input type="submit" value="Search" className='btn bg-lime-500 rounded-3xl border-0 font-secularOne inline' />
                    </div>
                </div>
            </form>
            <div className='mx-5 md:mx-20 my-10 shadow-lg rounded-lg overflow-x-auto'>
                <table className="table w-full table-normal z-0">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-base md:text-lg font-paytonOne capitalize font-medium text-slate-600'>SL No.</th>
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
                        loading ? <div className='flex justify-center items-center text-center h-[400px]'><h2 className='text-3xl font-normal'>Pr</h2><div className='w-6 h-6 border-4 md:w-10 md:h-10 md:border-8 border-dashed rounded-full border-blue-500 animate-spin'></div><h2 className='text-3xl font-normal'>cessing</h2></div>
                            :
                            <tbody>
                                {
                                    toys?.map((toy, index)=> <Toytable key={toy._id} toy={toy} index={index}></Toytable>)
                                }
                            </tbody>
                    }
                </table>

            </div>

        </>
    );
};

export default AllToys;