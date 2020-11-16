import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { Route, Redirect } from "react-router-dom";

const ProtectRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to="/admin/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectRoute;
