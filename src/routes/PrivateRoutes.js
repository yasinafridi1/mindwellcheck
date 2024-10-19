import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth);
  if (user.auth && user.userData.role === "user") {
    return children;
  }
  return <Navigate to="/auth" />;
};
