import React from 'react';

const SingelProduct = ({items}) => {
    const {name, image, description, price, rating} =items
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-white">
            <figure><img src={image} alt="Shoes" className='w-full h-[350px]'/></figure>
            <div className="card-body text-white">
                <h2 className="card-title">Name : {name}</h2>
                <div className='flex justify-between items-center'>
                <p className=' text-left text-lg font-bold text-green-300'>Price : {price}</p>
                <p className=' text-left text-lg font-bold text-green-300'>Rating : {rating}</p>
                </div>
                <p className=' text-left mt-3'>
                    Description : {description}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning px-11 mt-4 w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingelProduct;