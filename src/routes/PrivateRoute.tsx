import { Route, Redirect } from "react-router-dom";
import { auth } from "../config/firebase";
import { username } from "../consts/params";

export const PrivateRoute = ({
  children,
  ...props
}: React.PropsWithChildren<any>): JSX.Element => {
  if (auth.currentUser || username) return <Route {...props}>{children}</Route>;
  return <Redirect to="/" />;
};
