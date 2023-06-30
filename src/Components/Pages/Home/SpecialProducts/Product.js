import React from 'react';

const Product = ({ items }) => {

    const { name, price, image } = items;

    return (
        <div className="card w-96 bg-base-100 shadow-2xl border-2 border-orange-600">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-[110px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-white">Name : {name}</h2>
                <p className='font-bold text-white'>Price : {price}$</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions w-full mt-4">
                    <button className="btn btn-outline btn-warning w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;