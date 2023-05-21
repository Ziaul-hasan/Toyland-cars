/* eslint-disable no-unused-vars */
import React from 'react';
import Swal from 'sweetalert2';

const UpdateModal = ({toy, loading, update, setUpdate}) => {
    const {_id, price, quantity, description} = toy || {}
    console.log(_id)
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value

        const updateInfo = {
            price, quantity, description
        }
        console.log(updateInfo)

        fetch(`https://assignment-toy-marketplace-server.vercel.app/toy/${_id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                setUpdate(!update)
                Swal.fire({
                    icon: 'success',
                    title: 'Yehh!!!',
                    text: 'Information Updated Successfully'
                  })
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-4/5 md:w-3/5 max-w-2xl relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='my-5 text-xl md:text-3xl font-paytonOne font-semibold text-center text-slate-600'>Update Toy information</h1>
                    {
                        loading ?  <div className='flex justify-center items-center h-[calc(100vh-60px)]'><h2 className='text-3xl font-normal'>Pr</h2><div className='w-6 h-6 border-4 md:w-10 md:h-10 md:border-8 border-dashed rounded-full border-blue-500 animate-spin'></div><h2 className='text-3xl font-normal'>cessing</h2></div> : <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Price of Toy</span>
                            </label>
                            <input type="number" name='price' defaultValue={price} placeholder="write price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Available Qtys</span>
                            </label>
                            <input type="number" name='quantity' defaultValue={quantity} placeholder="write quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-secularOne">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" id="" cols="30" rows="3" defaultValue={description} placeholder='Describe about toy' className='border border-slate-300 p-4 rounded-md'></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Update Information" className="btn bg-lime-600 border-0 font-secularOne" />
                        </div>
                    </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;