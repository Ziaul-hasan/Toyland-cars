/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ToyCard from '../ToyCard/ToyCard';

const TabComponent = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState('car')

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])

    const handleTabOpen = tabname => {
        setActiveTab(tabname)
    }
    return (
        <div>
            <div className='w-4/5 md:3/5 mx-auto mt-20 mb-5' id='category'>
                <h1 className='text-2xl md:text-5xl font-semibold md:font-bold font-paytonOne text-slate-600 text-center my-10'>Find Our Popular Toys </h1>
                <div className="tabs font-paytonOne font-medium flex justify-center bg-slate-100 shadow-lg px-10 pt-4 rounded-3xl mt-5">
                    <a className={`tab hover:text-yellow-400 tab-lifted tab-lg car ${activeTab == 'car' ? 'tab-active text-yellow-400' : 'tab-lifted'}`} onClick={() => handleTabOpen('car')}>Sedan Car</a>
                    <a className={`tab hover:text-yellow-400 tab-lifted tab-lg suv ${activeTab == 'suv' ? 'tab-active text-yellow-400' : 'tab-lifted'}`} onClick={() => handleTabOpen('suv')}>SUV/Landcruser</a>
                    <a className={`tab hover:text-yellow-400 tab-lifted tab-lg truck ${activeTab == 'truck' ? 'tab-active text-yellow-400' : 'tab-lifted'}`} onClick={() => handleTabOpen('truck')}>Cargo Truck</a>
                    <a className={`tab hover:text-yellow-400 tab-lifted tab-lg bus ${activeTab == 'bus' ? 'tab-active text-yellow-400' : 'tab-lifted'}`} onClick={() => handleTabOpen('bus')}>Luxury Bus</a>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-6 my-5 w-4/5 md:3/5 mx-auto'>
                {
                    toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default TabComponent;