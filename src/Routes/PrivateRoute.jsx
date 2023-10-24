import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (user && !loading) {
    {
      return children;
    }
  } else {
    Navigate("/");
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
