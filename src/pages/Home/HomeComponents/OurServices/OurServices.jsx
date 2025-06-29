import React from "react";
import Container from "@/layouts/Container";
import services from "@/data/services.json";
import ServiceCard from "./../ServiceCard/ServiceCard";

const OurServices = () => {
  return (
    <section className="py-[40px]">
      <Container>
        <div className="bg-secondary rounded-xl p-10 text-white">
          <div>
            <h2 className="text-center text-3xl font-extrabold">
              Our services
            </h2>
            <p className="my-5 w-3/5 mx-auto text-center">
              Enjoy fast, reliable parcel delivery with real-time
              tracking and zero hassle. From personal packages to
              business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
