import React from "react";
import { NavLink } from "react-router";

const NavItems = () => {
  const active = "bg-primary rounded-3xl text-[#5B6A2E] font-bold";
  return (
    <>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? active : "")}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) => (isActive ? active : "")}
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? active : "")}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => (isActive ? active : "")}
        >
          {" "}
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/send-parcel"
          className={({ isActive }) => (isActive ? active : "")}
        >
          Send Parcel
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/be-rider"
          className={({ isActive }) => (isActive ? active : "")}
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
