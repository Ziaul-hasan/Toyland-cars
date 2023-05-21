/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import logo from '../../../assets/3d-illustration-toy-train-png (1).png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='w-5/6 md:w-4/5 mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-start'>
                <div>
                    <img className='w-[120px] h-[100px] mx-auto md:mx-0' src={logo} alt="" />
                    <h2 className='text-2xl md:text-4xl text-lime-600 font-paytonOne font-bold'>Toyland <span className='text-yellow-500 text-3xl md:text-5xl'>Cars</span></h2>
                </div>
                <div>
                    <h2 className='text-2xl md:text-4xl text-lime-600 font-paytonOne font-bold mb-6'>Contact Us</h2>
                    <h2 className='text-base md:text-lg font-normal font-secularOne md:font-medium text-yellow-500 my-3'> <FaMapMarkerAlt className='w-5 h-5 inline-block me-3'></FaMapMarkerAlt> 23/5, OR Nizam Road Chattogram, 1218</h2>
                    <h2 className='text-base md:text-lg font-normal font-secularOne md:font-medium text-yellow-500 my-3'> <FaPhoneAlt className='w-5 h-5 inline-block me-3'></FaPhoneAlt> 0123456709, +880 1765328745</h2>
                    <h2 className='text-base md:text-lg font-normal font-secularOne md:font-medium text-yellow-500 my-3'> <FaEnvelope className='w-5 h-5 inline-block me-3'></FaEnvelope> toylandcars@gmail.com</h2>
                </div>
                <div>
                    <h2 className='text-2xl md:text-4xl text-lime-600 font-paytonOne font-bold mb-6'>Follow Us On</h2>
                    <p className='flex space-x-4 text-yellow-500 justify-center md:justify-start'>
                        <FaFacebookF className='w-[32px] h-[32px]'></FaFacebookF>
                        <FaTwitter className='w-[32px] h-[32px]'></FaTwitter>
                        <FaInstagramSquare className='w-[32px] h-[32px]'></FaInstagramSquare>
                        <FaTelegramPlane className='w-[32px] h-[32px]'></FaTelegramPlane>
                    </p>
                    <h2 className='text-base md:text-lg font-normal font-secularOne md:font-medium text-yellow-500 my-3'> <FaGlobe className='w-5 h-5 inline-block me-3'></FaGlobe> www.toylandcars.com</h2>
                </div>
            </div>
            <p className='text-center font-secularOne mt-10 text-slate-600'>© All the rights reserved to copyright ToylandCars 2023</p>
        </div>
    );
};

export default Footer;