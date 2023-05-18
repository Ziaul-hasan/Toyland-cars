/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Iconsection from '../Iconsection/Iconsection';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Iconsection></Iconsection>
            <About></About>
        </div>
    );
};

export default Home;