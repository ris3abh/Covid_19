import Home from "./HomeComponent";
import Xray from "./XrayComponent";
import Header from "./HeaderComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route path="/xray" component={() => <Xray />} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
