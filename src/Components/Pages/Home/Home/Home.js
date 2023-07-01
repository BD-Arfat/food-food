import React from 'react';
import Banner from '../Banner/Banner';
import Abouts from '../Abouts/Abouts';
import Products from '../Products/Products';
import Service from '../Srevice/Service';
import SpecialProducts from '../SpecialProducts/SpecialProducts';
import Teams from '../Teams/Teams';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Abouts></Abouts>
            <Products></Products>
            <Service></Service>
            <SpecialProducts></SpecialProducts>
            <Teams></Teams>
            <Features></Features>
        </div>
    );
};

export default Home;