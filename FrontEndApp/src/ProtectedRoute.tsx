import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ Component, isAuthenticated, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
