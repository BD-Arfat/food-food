import React from 'react';
import { useQuery } from 'react-query';
import SingelProducts from './SingelProducts';

const Products = () => {

    const {data : products=[]} = useQuery({
        queryKey : ['products'],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/products');
            const data =await res.json();
            return data;
        }
    })

    return (
        <div className='mb-28'>
            <div>
                <h1 className='text-white font-bold text-center text-5xl mt-14'>Take the product of your choice.</h1>
            </div>
            <div className='grid grid-cols-3 mt-24 w-11/12 mx-auto gap-14'>
                {
                    products.map(items => <SingelProducts key={items._id} items={items}></SingelProducts>)
                }
            </div>
        </div>
    );
};

export default Products;