import React from "react";
import { useParams } from "react-router-dom";
import useServices from "../../../../CustomHooks/useServices";

const SelectedService = () => {
  const [services] = useServices();
  const { appointmentID } = useParams();
  const selectedServices = services.find(
    (service) => service.id == appointmentID
  );
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <img
            class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src={selectedServices?.img}
          />
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
              {selectedServices?.serviceName}
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              {selectedServices?.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectedService;
