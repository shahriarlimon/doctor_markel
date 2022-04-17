import React from "react";
import { Link } from "react-router-dom";
const SingleService = ({ service }) => {
  const { id, img, serviceName, description } = service;
  return (
    <div className="p-4 md:w-full flex flex-col text-center items-center border bg-white shadow">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img src={img} alt="" />
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
          {serviceName}
        </h2>
        <p className="leading-relaxed text-base">{description.slice(0, 200)}</p>
        <Link to={`/appointment/${id}`}
          className="mt-3 bg-[#0ea5e9] hover:bg-[#048fcf] inline-flex items-center px-4 py-2 text-white rounded-md font-serif"
        >
          Get the Appointment
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
