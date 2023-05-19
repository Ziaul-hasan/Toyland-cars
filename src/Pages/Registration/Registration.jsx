/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'

const Registration = () => {
    const { createUser, updateUserData, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [accept, setAccept] = useState(false);

    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<p class="text-red-600 text-lg font-medium">password must have six character</p>'
              })
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<p class="text-red-600 text-lg font-medium">Provide atleast one uppercase letter</p>'
              })
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<p class="text-red-600 text-lg font-medium">provide atleast one digit</p>'
              })
        }

        createUser(email, password)
            .then(result => {
                const from = location.state?.from?.pathname || '/';
                const createUser = result.user;
                navigate(from, { replace: true })
                console.log(createUser);
                updateUserData(result.user, name, photo)
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Yuh!!!',
                    text: 'Successfully Registered'
                  })
                
            })
            .catch(error => {
                
            })
    }
    return (
        <div>
            <div className='w-4/5 md:w-2/5 mx-auto my-12 p-8 shadow-xl rounded-lg bg-form'>
                <h1 className='my-5 text-xl md:text-4xl font-paytonOne font-semibold text-center text-slate-600'>Please Register !!</h1>
                <form onSubmit={handleRegistration}>
                    <div className="form-control my-3">
                        <label className="label font-secularOne">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" required className="input input-bordered" />
                    </div>
                    <div className="form-control my-3">
                        <label className="label font-secularOne">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="your@email" required className="input input-bordered" />
                    </div>
                    <div className="form-control my-3">
                        <label className="label font-secularOne">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                    </div>
                    <div className="form-control my-3">
                        <label className="label font-secularOne">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" required className="input input-bordered" />
                    </div>
                    <div className="form-control my-6">
                        <input type="submit" value="Register" className="btn border-0 font-secularOne font-medium text-lg bg-lime-600" />
                    </div>
                    <p className='text-base md:text-lg font-secularOne font-medium text-center'>Already have an account <Link to='/login' className='text-lime-600'>Login</Link></p>
                </form>
                <div className="divider my-5">OR</div>
                <div>
                    <button className='btn btn-block bg-slate-600 font-secularOne font-medium text-lg'><FaGoogle className='mx-5'></FaGoogle> Signin with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;