import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ canActivate, redirectPath = "/login", children }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
