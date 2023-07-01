import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const SpecialProducts = () => {

    const { data: drink = [] } = useQuery({
        queryKey: ['drink'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/drink');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='grid grid-cols-3 w-11/12 mx-auto mt-28 gap-7'>
                {
                    drink.map(items => <Product key={items._id} items={items} />)
                }
            </div>
            <div>
                <button className='btn btn-warning w-96 mx-auto mt-11'>See More</button>
            </div>
        </div>
    );
};

export default SpecialProducts;