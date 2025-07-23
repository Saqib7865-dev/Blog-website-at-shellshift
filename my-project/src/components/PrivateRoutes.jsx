import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("loggedIn");
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
