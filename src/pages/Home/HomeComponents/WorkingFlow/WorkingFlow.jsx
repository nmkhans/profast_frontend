import React from "react";
import Container from "./../../../../layouts/Container";
import {
  BookCheck,
  CircleDollarSign,
  Package,
  Truck,
} from "lucide-react";
import WorkCard from "../WorkCard/WorkCard";

const workFlows = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    Icon: BookCheck,
  },
  {
    title: "Cash On Delivery",
    description:
      "Take payment after delivering the good to your home, in your door steps.",
    Icon: CircleDollarSign,
  },
  {
    title: "Delivery Hub",
    description:
      "Delivery hubs in all the center point in bd. They provides good from your closest location to you.",
    Icon: Truck,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    Icon: Package,
  },
];

const WorkingFlow = () => {
  return (
    <section className="py-[80px]">
      <Container>
        <div>
          <h3 className="text-secondary text-2xl font-extrabold">
            How it works
          </h3>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {workFlows?.map((work, i) => (
              <WorkCard key={i} work={work} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkingFlow;
