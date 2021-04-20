import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignUp, Login, PrivateRoute } from "./routes/index";
import { Dashboard } from "./routes/Dashboard";

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
