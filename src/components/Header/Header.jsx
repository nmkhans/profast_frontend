import React from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import Container from "@/layouts/Container";
import { useAuthContext } from "@/context/Auth/AuthContext";
import NavItems from "../NavItems/NavItems";
import Logo from "../Logo/Logo";
import Spinner from "../Spinner/Spinner";
import UserProfile from "../UserProfile/UserProfile";

const Header = () => {
  const { user, loading } = useAuthContext();

  return (
    <header className="pt-5">
      <Container>
        <div className="navbar bg-white shadow-sm rounded-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-1"
              >
                <Menu size={20} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavItems />
                {loading ? (
                  <div className="me-5">
                    <Spinner />
                  </div>
                ) : user ? (
                  <div className="ms-5 mt-5">
                    <UserProfile isMobile />
                  </div>
                ) : (
                  <li className="flex space-y-3 mt-5">
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
                  </li>
                )}
              </ul>
            </div>
            <Logo />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavItems />
            </ul>
          </div>
          <div className="hidden lg:navbar-end space-x-5">
            {loading ? (
              <div className="me-5">
                <Spinner />
              </div>
            ) : user ? (
              <div className="me-5">
                <UserProfile />
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
