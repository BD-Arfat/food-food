import React from 'react';
import Banner from '../Banner/Banner';
import Abouts from '../Abouts/Abouts';
import Products from '../Products/Products';
import Service from '../Srevice/Service';
import SpecialProducts from '../SpecialProducts/SpecialProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Abouts></Abouts>
            <Products></Products>
            <Service></Service>
            <SpecialProducts></SpecialProducts>
        </div>
    );
};

export default Home;