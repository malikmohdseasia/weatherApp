import { Navigate } from "react-router-dom";

const LoginRoute = ({ children }:any) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default LoginRoute;