import React from 'react';
import error from '../../image/Frame.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='mt-20 w-96 mx-auto'>
                <img src={error} alt="" />
                <h1 className='text-white font-bold text-xl mt-10'>You go back home again : <Link className=' text-warning' to={'/'}>Home</Link> </h1>
            </div>
        </div>
    );
};

export default Error;