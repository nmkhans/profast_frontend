import React from "react";
import HeaderLogo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link className="relative" to="/">
      <img
        className="absolute -top-2 left-2 w-6"
        src={HeaderLogo}
        alt="Header Logo"
      />
      <span className="ms-5 text-dark font-bold text-2xl">
        Profast
      </span>
    </Link>
  );
};

export default Logo;
