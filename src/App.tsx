import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignUp, Login, PrivateRoute, Dashboard } from "./routes/index";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <PrivateRoute to="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};
