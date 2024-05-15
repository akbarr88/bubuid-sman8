import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id_user");

  const isAuthenticated = () => {
    return !!token;
  };

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
