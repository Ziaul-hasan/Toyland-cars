/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Iconsection from '../Iconsection/Iconsection';
import About from './About/About';
import TabComponent from './TabComponent/TabComponent';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Iconsection></Iconsection>
            <About></About>
            <TabComponent></TabComponent>
        </div>
    );
};

export default Home;