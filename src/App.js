import React, { Component } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Myblog from './pages/system/myblog';
import Nomatch from './pages/nomatch';

import Manageblog from './pages/system/manageblog';
import Writeblog from './pages/system/writeblog';
import Markedownedit from './pages/system/markedownedit';
import Usermanage from './pages/system/userimanage';
import Personhomepage from './pages/system/personhomepage';
import Arcitledetail from './pages/system/arcitledetail';
import Classmanage from './pages/system/classmanage';
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
          <Route path="/login" exact component={Login} />
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
          <Route path="/manageblog" component={Manageblog} />
          <Route path="/writeblog" component={Writeblog} />
          <Route path="/markdownedit" component={Markedownedit} />
          <Route path="/userimanage" component={Usermanage} />
          <Route path="/personhomepage" component={Personhomepage} />
          <Route path="/articledetail" component={Arcitledetail} />
          <Route path="/classmanage" component={Classmanage} />
          <Route component={Nomatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
