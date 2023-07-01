import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { toast } from 'react-hot-toast';
import DrinkRevews from './DrinkRevews';

const DrinkDetails = () => {
    const { user } = useContext(AuthContext)
    const { name, price, image, _id } = useLoaderData();

    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const review = form.review.value;

        const data = {
            name: name,
            email: email,
            review: review,
            productId : _id
        }

        fetch("http://localhost:5000/reviews", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('successfull add your review')
            }
        })

    };

   

    return (
        <div className='mb-20'>
            <div>
                <h1 className='text-white font-bold mt-10 text-4xl'>Check everything first, then take the product</h1>
            </div>
            <div className='flex justify-between'>
                <div className='mt-16 w-1/2'>
                    <div className='mx-auto'>
                        <img src={image} className='w-[370px] h-[370px]' alt="" />
                        <div className='ms-10 text-justify'>
                            <h1 className='text-2xl font-bold text-white'>Name : {name}</h1>
                            <h1 className='text-xl mt-3 font-bold text-white'>Price : {price}$</h1>
                            <button className='btn btn-warning w-96 mt-7'>Add To Cart</button>
                            <div>
                                <h1 className='text-white font-bold text-center mt-9 text-4xl'>
                                    Please leave your review
                                </h1>
                                <div>
                                    <div className="hero">
                                        <form onSubmit={handelSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                            <div className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Email</span>
                                                    </label>
                                                    <input type="email" name='email' defaultValue={user?.email} disabled placeholder="email" className="input input-bordered input-warning" />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Product Name</span>
                                                    </label>
                                                    <input type="text" name='name' defaultValue={name} disabled className="input input-bordered input-warning" />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">You write about our product here</span>
                                                    </label>
                                                    <textarea name='review' type="text" className="textarea textarea-warning" placeholder="Write here"></textarea>
                                                </div>
                                                <div className="form-control mt-6">
                                                    <button className="btn btn-warning">submit Review</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 mt-28'>
                    <h1 className='text-center text-white text-3xl'>All reviews of this product are here</h1>
                        <DrinkRevews/>
                </div>
            </div>
        </div>
    );
};

export default DrinkDetails;