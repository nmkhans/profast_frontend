import React from "react";
import Container from "./../../layouts/Container";
import NavItems from "../NavItems/NavItems";
import { Link } from "react-router";
import HeaderLogo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="pt-5">
      <Container>
        <div className="navbar bg-white shadow-sm rounded-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavItems />
              </ul>
            </div>
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
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavItems />
            </ul>
          </div>
          <div className="navbar-end space-x-5">
            <Link
              className="btn btn-outline rounded-lg border-slate-400 text-primary-content"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn btn-primary rounded-lg text-base-content"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
