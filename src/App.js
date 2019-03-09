import React, {Component} from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Myblog from './pages/system/myblog';
import Nomatch from './pages/nomatch';
import Manageblog from './pages/system/manageblog';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
class App extends Component {
  checkUserState(){
    if(sessionStorage.getItem('APP_LOGIN_USER')){
      return true;
    }
    return false;
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={ () => <Redirect to="/home"></Redirect> }></Route>
          <Route path="/login" exact component={Login}/>
          <Route path="/home" component={Home} />
          <Route path="/home" render={(props)=>{
            if(this.checkUserState()){
              return <Home {...props}/>
            }
            sessionStorage.setItem('APP_LAST_URL',JSON.stringify(props.location))
            return <Redirect to="/login" />
          }}/>
          <Route path="/myblog" component={Myblog}/>
          <Route path="/manageblog" component={Manageblog}/>
          <Route component={Nomatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
