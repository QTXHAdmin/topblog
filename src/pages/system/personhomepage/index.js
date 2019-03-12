import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Headers from '../../../components/header';
import Homepageheader from './components/homepagehead';
import Homepageinfo from './components/homepageinfo';
import Blog from './blog';
import Pubsource from './pubsource';
import Pubcard from './pubcard';
import Question from './question';
import './style.less';
class Personhomepage extends Component {
  render() {
    return (
      <Fragment>
        <Headers />
        <div className="main">
          <div className="content-left">
            <Homepageheader />
            <Route
              path="/personhomepage"
              render={() => <Redirect to="/personhomepage/blog" />}
            />
            <Route path="/personhomepage/blog" component={Blog} />
            <Route path="/personhomepage/pubsource" component={Pubsource} />
            <Route path="/personhomepage/pubcard" component={Pubcard} />
            <Route path="/personhomepage/question" component={Question} />
          </div>
          <div className="content-right">
            <Homepageinfo />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personhomepage);
