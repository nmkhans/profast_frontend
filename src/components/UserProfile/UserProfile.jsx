import React from "react";
import { useAuthContext } from "@/context/Auth/AuthContext";
import userPlaceholder from "@/assets/userPlaceholder.png";
import { toast } from "sonner";
import { Link } from "react-router";

const UserProfile = ({ isMobile }) => {
  const { user, logoutUser } = useAuthContext();

  const handleLogout = () => {
    logoutUser();
    toast.success("Logout successful.");
  };

  return (
    <div
      className={`dropdown ${
        isMobile ? "dropdown-start" : "dropdown-end"
      } cursor-pointer`}
    >
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img
              src={user?.photoURL || userPlaceholder}
              alt="User profile image"
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="btn btn-ghost">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
