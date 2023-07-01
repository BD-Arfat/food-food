import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ProductLaouts = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-32 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className='text-white font-bold'><Link to={'/product'}>Product</Link></li>
                        <li className='text-white font-bold'><Link to={'/product/drink'}>Drink</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProductLaouts;