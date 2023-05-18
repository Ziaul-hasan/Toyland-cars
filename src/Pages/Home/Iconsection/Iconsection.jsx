/* eslint-disable no-unused-vars */
import React from 'react';
import icon1 from '../../../assets/42052-1-800x800.png'
import icon2 from '../../../assets/Cop-Car-PNG-Photos.png'
import icon3 from '../../../assets/tow truck.png'
import icon4 from '../../../assets/racing car.png'
import './Iconsection.css'

const Iconsection = () => {
    return (
        <div className='icon-bg'>
            <div className='w-4/5 md:2/5 mx-auto grid md:grid-cols-4 gap-4'>
                <div className='my-10 flex flex-col items-center'>
                    <div className='w-48 h-48 p-5 rounded-full bg-slate-100 shadow-md my-5'>
                        <img src={icon2} alt="" />
                    </div>
                    <h1 className='text-normal md:text-2xl font-semibold font-secularOne text-center'>Action</h1>
                </div>
                <div className='my-10 flex flex-col items-center'>
                    <div className='w-48 h-48 p-5 rounded-full bg-slate-100 shadow-md my-5'>
                        <img src={icon3} alt="" />
                    </div>
                    <h1 className='text-normal md:text-2xl font-semibold font-secularOne text-center'>Responsibility</h1>
                </div>
                <div className='my-10 flex flex-col items-center'>
                    <div className='w-48 h-48 p-5 rounded-full bg-slate-100 shadow-md my-5'>
                        <img src={icon4} alt="" />
                    </div>
                    <h1 className='text-normal md:text-2xl font-semibold font-secularOne text-center'>Competition</h1>
                </div>
                <div className='my-10 flex flex-col items-center'>
                    <div className='w-48 h-48 p-5 rounded-full bg-slate-100 shadow-md my-5'>
                        <img src={icon1} alt="" />
                    </div>
                    <h1 className='text-normal md:text-2xl font-semibold font-secularOne text-center'>Ambition</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Iconsection;