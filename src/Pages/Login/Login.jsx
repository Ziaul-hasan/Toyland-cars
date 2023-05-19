/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div>
            <div className='w-4/5 md:w-2/5 mx-auto my-12 p-8 shadow-xl rounded-lg bg-form'>
                <h1 className='my-5 text-xl md:text-4xl font-paytonOne font-semibold text-center text-slate-600'>Please Login !!</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label font-secularOne">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label font-secularOne">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control my-6">
                        <input type="submit" value="Login" className="btn border-0 font-secularOne font-medium text-lg bg-lime-600" />
                    </div>
                    <p className='text-base md:text-lg font-secularOne font-medium text-center'>New to Toyland Cars? <Link to='/register' className='text-lime-600'>Register</Link> First</p>
                </form>
                <div className="divider my-5">OR</div>
                <div>
                    <button className='btn btn-block bg-slate-600 font-secularOne font-medium text-lg'><FaGoogle className='mx-5'></FaGoogle> Signin with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;