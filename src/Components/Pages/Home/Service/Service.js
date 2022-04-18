import React from 'react';
import useServices from '../../../CustomHooks/useServices';
import SingleService from './SingleService';

const Service = () => {
    const [services,setServices] = useServices();
    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className=" text-3xl font-medium title-font text-gray-900 mb-4">Our services</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Get Results for Dentist In Florida. Find Quick Results from Multiple Sources. Quick Results - Search for Relevant Info & Results. Easy Acces To Information. Simple in use. Multiple sources combined. Fast and trusted. All the Answers. Discover us now!</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-[#0ea5e9] inline-flex"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
     {
         services.map(service=><SingleService key={service.id} service={service}/>)
     }
    
    </div>
  </div>
</section>
    );
};

export default Service;