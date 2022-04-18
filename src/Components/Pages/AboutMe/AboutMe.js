import React from "react";
import photo from '../../Assets/me.jpg'

const AboutMe = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={photo}  alt = "" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Shahriar Limon</h1>
        <p className="font-semibold text-purple-600">Aspirent web developer</p>
        <p className="py-6">I want to be a serious professional web developer within this year.The path so far in this journey wasn't easy.But somehow I have managed to complete the most of the phase quite successfully.I know it will be much more difficult on the days ahead but I'm pretty much convinced to do at whatever it takes to complete the course perfectly.</p>
    
      </div>
    </div>
  </div>
    
  );
};

export default AboutMe;
