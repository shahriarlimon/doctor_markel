import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Carousel from './Service/Carousel/Carousel';
import Service from './Service/Service';
import Testimonials from './Service/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Carousel/>
            <Service/>
            <Testimonials/>
            <HeroSection/>
        </div>
    );
};

export default Home;