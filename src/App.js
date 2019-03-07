import React, {Component} from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Nomatch from './pages/nomatch';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={ () => <Redirect to="/home"></Redirect> }></Route>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route component={Nomatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
