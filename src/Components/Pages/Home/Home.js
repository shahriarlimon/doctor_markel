import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Carousel from './Service/Carousel/Carousel';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
           <Carousel/>
            <Service/>
            <HeroSection/>
        </div>
    );
};

export default Home;