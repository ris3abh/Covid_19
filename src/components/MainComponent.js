import React, { Component } from 'react';
import Home from './HomeComponent';
import Xray from './XrayComponent';
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router-dom';
//  

class Main extends Component {

  render() {

    return (
      <div>
        <Router>
          <Header />
          <Switch>
              <Route path='/home' component={() => <Home/>} />
              <Route path='/xray' component={() => <Xray/>} />
              <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;