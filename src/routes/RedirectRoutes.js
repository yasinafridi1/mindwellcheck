import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RedirectRoute = ({ children }) => {
  const user = useSelector((state) => state.auth);
  const location = JSON.parse(localStorage.getItem("userhistory"));
  if (user.auth && user.userData.role === "user") {
    return <Navigate to={location || "/"} />;
  }
  return children;
};
