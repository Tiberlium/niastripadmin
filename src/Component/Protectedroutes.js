import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("token");

  if (token === "true") {
    return true;
  } else {
    return false;
  }
};

export default function Protectedroutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
}
