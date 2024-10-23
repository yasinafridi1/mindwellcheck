import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/NotFound";
import Auth from "../pages/Auth";
import { PrivateRoute } from "./PrivateRoutes";
import { RedirectRoute } from "./RedirectRoutes";
import DashboardLayout from "../layouts/DashboardLayout";

export default createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/auth",
    element: (
      <RedirectRoute>
        <Auth />
      </RedirectRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [{ path: "/", element: <Home /> }],
  },
]);
