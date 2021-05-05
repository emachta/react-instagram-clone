import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { useAuthState } from "../utils/auth/auth";

const PublicRoute = ({ component: Component, ...rest }) => {
  const [loggedIn] = useAuthState();
  if (loggedIn === null) return <Loader />;
  console.log("YO! ", loggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
