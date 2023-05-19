/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState([])

    const handleTabOpen = tabname => {
        setActiveTab(tabname)
    }
    return (
        <div className='w-4/5 md:3/5 mx-auto my-20'>
            <h1 className='text-2xl md:text-5xl font-semibold md:font-bold font-paytonOne text-slate-600 text-center my-10'>Find Our Popular Toys </h1>
            <div className="tabs font-paytonOne font-medium flex justify-center bg-slate-100 shadow-lg px-10 pt-4 rounded-3xl mt-5">
                <a className={`tab hover:text-yellow-400 tab-lifted tab-lg sedan ${activeTab == 'sedan' ? 'tab-active text-yellow-400' : 'tab-lifted' }`} onClick={() => handleTabOpen('sedan')}>Sedan Car</a>
                <a className={`tab hover:text-yellow-400 tab-lifted tab-lg suv ${activeTab == 'suv' ? 'tab-active text-yellow-400' : 'tab-lifted' }`} onClick={() => handleTabOpen('suv')}>SUV/Landcruser</a>
                <a className={`tab hover:text-yellow-400 tab-lifted tab-lg bus ${activeTab == 'bus' ? 'tab-active text-yellow-400' : 'tab-lifted' }`} onClick={() => handleTabOpen('bus')}>Luxury Bus</a>
                <a className={`tab hover:text-yellow-400 tab-lifted tab-lg truck ${activeTab == 'truck' ? 'tab-active text-yellow-400' : 'tab-lifted' }`} onClick={() => handleTabOpen('truck')}>Cargo Truck</a>
            </div>
        </div>
    );
};

export default TabComponent;