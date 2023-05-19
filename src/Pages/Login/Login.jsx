/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'

const Login = () => {
    const {signInUser, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        const from = location.state?.from?.pathname || '/';

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                icon: 'success',
                title: 'Yehh!!!',
                text: 'Successfully Logged in'
              })
            navigate(from, {replace: true})
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<p class="text-red-600 text-lg font-medium">invalid email and password</p>'
              })
        })
    }

    const handleLoginWithGoogle = () =>{
        const from = location.state?.from?.pathname || '/';
        googleLogin()
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true})
            console.log(user)
        })
        .then(error =>{
            console.log(error)
        })
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
                        <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <p style={{ cursor: 'pointer', marginTop: '' }} onClick={() => setShow(!show)}> {show ? <span><FaEyeSlash className='ms-auto -mt-8 me-6 text-xl'></FaEyeSlash></span> : <span><FaEye className='ms-auto -mt-8 me-6 text-xl'></FaEye></span>}</p>
                    <div className="form-control mt-12 mb-6">
                        <input type="submit" value="Login" className="btn border-0 font-secularOne font-medium text-lg bg-lime-600" />
                    </div>
                    <p className='text-base md:text-lg font-secularOne font-medium text-center'>New to Toyland Cars? <Link to='/register' className='text-lime-600'>Register</Link> First</p>
                </form>
                <div className="divider my-5">OR</div>
                <div>
                    <button onClick={handleLoginWithGoogle} className='btn btn-block bg-slate-600 font-secularOne font-medium text-lg'><FaGoogle className='mx-5'></FaGoogle> Signin with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;