import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { useAuthState } from "../utils/auth/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loggedIn, user] = useAuthState();
  if (loggedIn === null) return <Loader />;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
