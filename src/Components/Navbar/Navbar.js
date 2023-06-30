import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const items = <>
        <li className='font-bold'><Link>Home</Link></li>
        <li className='font-bold'><Link>About</Link></li>
        <li className='font-bold'><Link>Products</Link></li>
        <li className='font-bold'><Link>your-Review</Link></li>
        <li className='font-bold'><Link>Add-Product</Link></li>
        <li className='font-bold'><Link>Your-Product</Link></li>
        <li className='font-bold'><Link>add-seller</Link></li>
    </>
    return (
        <div className="navbar bg-green-800 text-white lg:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link to={'/'} className="font-bold text-lg md:text-4xl">Food-Food</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {items}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-warning px-14">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;