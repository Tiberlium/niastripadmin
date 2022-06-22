import React from "react";
import Navigation from "./Navigation";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const token = false;

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default function Protectedroutes() {
  const auth = useAuth();
  return auth ? <Navigation /> : <Navigate to="/" />;
}
