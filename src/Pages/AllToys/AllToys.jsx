/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Toytable from './Toytable/Toytable';

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] =useState("")
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = event => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value
        console.log(search)

        fetch(`http://localhost:5000/searchToyByNameCategory/${searchText}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }
    return (
        <>
            <div>
                <h2>all toys will show here</h2>
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