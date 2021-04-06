import { Route, Redirect } from "react-router-dom";
import { Dashboard } from "../routes/Dashboard";
import { username } from "../consts/params";
import { AppContext } from "../context/Context";
import { useContext } from "react";

export const PrivateRoute = ({ ...rest }: any): JSX.Element => {
  const context = useContext(AppContext);

  if (context?.currentUser || username) {
    return <Route {...rest} path="/dashboard" component={Dashboard} />;
  } else {
    return <Redirect to="/" />;
  }
};
