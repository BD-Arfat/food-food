import React from 'react';
import { useQuery } from 'react-query';
import SingelDrink from './SingelDrink';

const Drink = () => {
    const { data: drinks = [] } = useQuery({
        queryKey: ['drinks'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/drinks');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mb-28'>
            <div>
                <h1 className='text-white font-bold text-center text-5xl mt-14'>Take the Drink of your choice.</h1>
            </div>
            <div className="form-control mt-9 mx-20">
                <input type="text" placeholder="Search" className="input input-bordered input-warning" />
            </div>
            <div className='grid grid-cols-3 mt-24 w-11/12 mx-auto gap-14'>
                {
                    drinks.map(items => <SingelDrink key={items._id} items={items}></SingelDrink>)
                }
            </div>
        </div>
    );
};

export default Drink;