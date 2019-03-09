import React, { Component } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Myblog from './pages/system/myblog';
import Nomatch from './pages/nomatch';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
class App extends Component {
  checkUserState() {
    if (sessionStorage.getItem('APP_LOGIN_USER')) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/login" component={Login} />
          <Route
            path="/home"
            render={props => {
              if (this.checkUserState()) {
                return <Home {...props} />;
              }
              sessionStorage.setItem(
                'APP_LAST_URL',
                JSON.stringify(props.location)
              );
              return <Redirect to="/login" />;
            }}
          />
          <Route path="/myblog" component={Myblog} />
          <Route component={Nomatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
