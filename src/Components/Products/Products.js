import React, { useState } from 'react';
import { useQuery } from 'react-query';
import SingelProducts from './SingelProducts';
import Product from './Product';

const Products = () => {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className='mb-28'>
            <div>
                <h1 className='text-white font-bold text-center text-5xl mt-14'>Take the product of your choice.</h1>
            </div>
            <div className="form-control mt-20 mx-56">
                <input onChange={inputHandler} type="text" placeholder="Search" className="input input-bordered input-warning" />
            </div>
            <Product input={inputText} />
        </div>
    );
};

export default Products;