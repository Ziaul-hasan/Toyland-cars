/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './AddToy.css'
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'

const AddToys = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const picture = form.picture.value;
        const toy = form.toy.value;
        const name = form.name.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const messege = form.messege.value;

        const addedToy = {
            picture: picture,
            name: toy,
            sellerName: name,
            sellerEmail: email,
            price: price,
            rating: ratings,
            quantity: quantity,
            subcategory: subcategory,
            description: messege
        }
        console.log(addedToy)

        fetch('https://assignment-toy-marketplace-server.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Yehh!!!',
                        text: 'Toy added Successfully'
                    })
                }
            })
    }
    return (
        <div>
            <div className='bg-img1 flex items-center justify-center ps-10'>
                <h1 className='text-2xl md:text-8xl font-paytonOne text-base-300'>Add A <span className='text-yellow-400'>Toy</span></h1>
            </div>
            <div className='w-4/5 md:w-3/5 mx-auto my-12 p-8 shadow-xl rounded-lg bg-form'>
                <h1 className='my-5 text-xl md:text-4xl font-paytonOne font-semibold text-center text-slate-600'>Add Your Toy Here</h1>
                <form onSubmit={handleAddToy}>
                    <div className='grid md:grid-cols-2 gap-5 my-4'>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Picture</span>
                            </label>
                            <input type="text" name='picture' placeholder="picture url of toy" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toy' placeholder="name of toy" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5 my-4'>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="seller name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} placeholder="seller email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5 my-4'>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <select name="subcategory" className='input input-bordered'>
                                <option value="">Select One</option>
                                <option value="car">Car</option>
                                <option value="suv">SUV</option>
                                <option value="bus">Bus</option>
                                <option value="truck">Truck</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5 my-4'>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Price of Toy</span>
                            </label>
                            <input type="number" name='price' placeholder="write price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name='ratings' placeholder="ratings" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label font-secularOne">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="messege" id="" cols="30" rows="4" placeholder='Describe about toy' className='border border-slate-300 p-4 rounded-md'></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Add Toy" className="btn bg-lime-600 border-0 font-secularOne" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;