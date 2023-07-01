import React from 'react';
import { useQuery } from 'react-query';
import SingelProducts from './SingelProducts';

const Product = (props) => {

    const {data : products=[]} = useQuery({
        queryKey : ['products'],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/products');
            const data =await res.json();
            return data;
        }
    });

    //create a new array by filtering the original array
    const filteredData = products.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })

    return (
        <div className='grid grid-cols-3 mt-24 w-11/12 mx-auto gap-14'>
                {
                    filteredData.map(items => <SingelProducts key={items._id} items={items} item={items.name}></SingelProducts>)
                }
            </div>
    );
};

export default Product;