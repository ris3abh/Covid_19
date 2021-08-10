import { useEffect } from "react";
import WebFont from "webfontloader";
import Home from "./pages/Home";
import Xray from "./pages/Xray";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Sans", "Roboto"],
      },
    });
  }, []);

  return (
    <div className="App main">
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
}

export default App;
