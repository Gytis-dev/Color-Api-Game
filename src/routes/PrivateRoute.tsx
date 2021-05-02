import { Route, Redirect } from "react-router-dom";
import { auth } from "../config/firebase";
import { username } from "../consts/params";

interface RouteType {
  to: string;
  exact: boolean;
  component: () => JSX.Element;
}

export const PrivateRoute = ({
  children,
  ...props
}: React.PropsWithChildren<RouteType>): JSX.Element =>
  auth.currentUser || username ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to="/" />
  );
