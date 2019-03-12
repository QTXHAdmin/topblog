import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Headerr from '../../../components/Header/index';
import Navbar from './components/navbar/navbar';
import Topbar from './components/topbar/topbar';
import Maincontent from './components/maincontent/maincontent';
import Btns from './components/btns/btns';
import Writeblog from '../writeblog';
import './style.less';
import { Layout } from 'antd';
const { Content } = Layout;
class Manageblog extends Component {
  render() {
    return (
      <Fragment>
        <Headerr />
        <Layout className="main clearfix" style={{ height: '100%' }}>
          <Navbar />
          <Layout>
            <Content
              style={{
                margin: '24px 16px 0',
                // overflow: 'initial',
                height: '100%'
              }}
            >
              <div
                style={{ padding: 24, background: '#fff', textAlign: 'center' }}
              >
                <Route
                  path="/manageblog"
                  render={() => <Redirect to="/manageblog/arcitlemanage" />}
                />
                <Route
                  exact
                  path="/manageblog/writeblog"
                  component={Writeblog}
                />

                <Route
                  exact
                  path="/manageblog/arcitlemanage"
                  render={() => (
                    <Fragment>
                      <Topbar />
                      <Btns />
                      <Maincontent />
                    </Fragment>
                  )}
                />
              </div>
            </Content>
            <footer className="footer">
              Ant Design ©2018 Created by Ant UED
            </footer>
          </Layout>
        </Layout>
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
)(Manageblog);
