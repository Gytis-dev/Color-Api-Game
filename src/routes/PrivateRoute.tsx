import { Route, Redirect } from "react-router-dom";
import { Dashboard } from "../routes/Dashboard";
import { useSelector } from "react-redux";
import { username } from "../consts/params";

export const PrivateRoute = ({ ...rest }: any): JSX.Element => {
  const state = useSelector((state: any) => state.userReducer);

  if (state.user.length != 0 || username) {
    return <Route {...rest} path="/dashboard" component={Dashboard} />;
  } else {
    return <Redirect to="/" />;
  }
};
