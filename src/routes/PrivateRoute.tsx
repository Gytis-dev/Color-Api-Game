import { Route, Redirect } from "react-router-dom";
import { Dashboard } from "../routes/Dashboard";
import { username } from "../consts/params";

const currentUserCheck = () => {
  if (username) return true;
  else return false;
};

export const PrivateRoute = ({ ...rest }: any): JSX.Element => {
  if (currentUserCheck()) {
    return <Route {...rest} path="/dashboard" component={Dashboard} />;
  } else {
    return <Redirect to="/" />;
  }
};
