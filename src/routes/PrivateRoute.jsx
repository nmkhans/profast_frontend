import { useLocation } from "react-router";
import { useAuthContext } from "@/context/Auth/AuthContext";
import Spinner from "@/components/Spinner/Spinner";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
