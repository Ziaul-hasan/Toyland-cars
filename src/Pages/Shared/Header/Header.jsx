/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/3d-illustration-toy-train-png (1).png'
import { AuthContext } from '../../../Providers/AuthProviders';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        logOut()
    }
    return (
        <div className='flex justify-between items-center px-4 md:px-20 bg-white shadow-md shadow-slate-400'>
            <div className='flex space-x-2 md:space-x-5 items-center'>
                <div onClick={() => setOpen(!open)}>
                    {
                        (open === true ? <HiX className="h-6 w-6 text-lime-600 md:hidden"></HiX> : <HiMenuAlt3 className="h-6 w-6 text-lime-600 md:hidden"></HiMenuAlt3>)
                    }
                </div>
                <Link to="/">
                    <div className='flex items-center md:space-x-3 py-6 md:py-3 bg-white relative'>
                        <img className='w-12 h-8 md:w-20 md:h-16' src={logo} alt="" />
                        <h2 className='text-xl md:text-4xl font-paytonOne font-bold text-lime-600'>Toyland <span className='text-2xl md:text-5xl text-yellow-400'>Cars</span></h2>
                    </div>
                </Link>
            </div>
            <div>
                <ul className={`md:inline-flex absolute md:static z-10 ${open ? 'top-16 left-0 right-0 ps-10' : '-top-48 left-0 right-0 ps-10'} md:space-x-8 py-4 bg-white text-slate-600 font-paytonOne text-xl`}>
                    <li className='hover:text-lime-600'><NavLink title='home' className={({ isActive, isPending }) => isActive ? 'text-lime-600' : ''} to="/">Home</NavLink></li>
                    <li className='hover:text-lime-600'><NavLink title='alltoys' className={({ isActive, isPending }) => isActive ? 'text-lime-600' : ''} to="/alltoys">All Toys</NavLink></li>
                    {
                        user ?  <li className='hover:text-lime-600'><NavLink title='mytoys' className={({ isActive, isPending }) => isActive ? 'text-lime-600' : ''} to="/mytoys">My Toys</NavLink></li> : ''
                    }
                    {
                        user ? <li className='hover:text-lime-600'><NavLink title='addtoys' className={({ isActive, isPending }) => isActive ? 'text-lime-600' : ''} to="/addtoys">Add A Toy</NavLink></li> : ''
                    }
                    <li className='hover:text-lime-600'><NavLink title='blog' className={({ isActive, isPending }) => isActive ? 'text-lime-600' : ''} to="/blog">Blogs</NavLink></li>
                </ul>
            </div>
            <div className='flex space-x-3 md:space-x-6  items-center'>
                <div>
                    {
                        user && <Link title={user?.displayName}><img className='md:w-12 md:h-12 w-8 h-8 rounded-full border-2 border-lime-500' src={user?.photoURL} alt="" /></Link>
                    }
                </div>
                <div>
                    {
                        user ? <button onClick={handleLogout} className='btn btn-xs md:btn-md bg-lime-500 border-0 font-paytonOne md:font-medium font-normal'>Log out</button> : <Link to='/login'><button className='btn btn-xs md:btn-md bg-lime-500 border-0 font-paytonOne md:font-medium font-normal'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;