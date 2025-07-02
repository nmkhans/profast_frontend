import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Coverage from "@/pages/Coverage/Coverage";
import SendParcel from "@/pages/SendParcel/SendParcel";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
