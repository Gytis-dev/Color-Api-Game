import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Start } from "./routes/Start";
import { PrivateRoute } from "./routes/PrivateRoute";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Start} />
        <PrivateRoute />
      </Switch>
    </Router>
  );
};
