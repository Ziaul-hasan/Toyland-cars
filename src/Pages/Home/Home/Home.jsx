/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Iconsection from '../Iconsection/Iconsection';
import About from './About/About';
import TabComponent from './TabComponent/TabComponent';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Iconsection></Iconsection>
            <About></About>
            <TabComponent></TabComponent>
            <div className='text-center my-10'>
                <Link to='/alltoys'><button className='btn bg-lime-500 font-secularOne font-medium md:font-semibold border-0 btn-wide text-xl'>View All Toys</button></Link>
            </div>
        </div>
    );
};

export default Home;