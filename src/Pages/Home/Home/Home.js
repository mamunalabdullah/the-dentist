import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Testimonial />
        </div>
    );
};

export default Home;