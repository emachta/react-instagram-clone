import Login from "./containers/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./router/PublicRoute";
import SignUp from "./containers/SignUp/SignUp";
import Home from "./containers/Home/Home";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} path="/" exact />
        <PublicRoute component={SignUp} path="/signup" exact />
        <PrivateRoute component={Home} path="/home" exact />
      </Switch>
    </Router>
  );
}

export default App;
