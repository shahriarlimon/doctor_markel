import React from "react";

const HeroSection = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          I always notice a person's smile.
            <br class="hidden lg:inline-block" />
            I'm a dental hygienist.
          </h1>
          <p class="mb-8 leading-relaxed">
          It is so important to brush your teeth to look after your winning smile! Smiling is good for your health and these dental quotes are a wonderful motivation to remember that they are your teeth, no dentist can clean them better than you!
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-[#0ea5e9] border-[#0ea5e9] border py-2 px-6 focus:outline-none hover:border-indigo-600 hover:text-indigo-600 rounded-lg text-lg">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
