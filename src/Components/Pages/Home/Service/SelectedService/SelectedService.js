import React from "react";
import { useParams } from "react-router-dom";
import useServices from "../../../../CustomHooks/useServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectedService = () => {
  const [services] = useServices();
  const { appointmentID } = useParams();
  const selectedServices = services.find(
    (service) => service.id == appointmentID
  );
  const handleFormSubmit = e=>{
    e.preventDefault();
    toast("Your registration successfully completed")

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <img
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src={selectedServices?.img}
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                {selectedServices?.serviceName}
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {selectedServices?.description}
              </p>
            </div>
          </div>
        </section>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span>Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered"
                required
              />
                <label className="label">
                <span>Your Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Finalize your Appointment</button>
              <ToastContainer/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectedService;
