import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import store from '../../../../store';
import Navbar from '../components/navbar';
import './style.less';
class Blog extends Component {
  state = {
    level: '等级',
    visit: '访问',
    original: '原创',
    repeat: '转发',
    ranking: '排名',
    comment: '评论',
    praised: '获赞'
  };
  componentDidMount() {
    store.dispatch(actionCreator.getinfo());
  }
  render() {
    const { articleslist } = this.props;
    return (
      <Fragment>
        <div className="blog-wrapper clearfix">
          <div className="blog-top clearfix">
            <Navbar
              level={this.state.level}
              visit={this.state.visit}
              original={this.state.original}
              repeat={this.state.repeat}
              ranking={this.state.ranking}
              comment={this.state.comment}
              praised={this.state.praised}
            />
          </div>
          <ul className="arcitle-list-wrap">
            {articleslist.map((item, index) => {
              return (
                <li key={item._id}>
                  <h3>{item.title}</h3>
                  <div className="arcitile-info-wrap">
                    <div className="left-info">
                      <span>阅读次数:33</span>
                    </div>
                    <div className="right-info">
                      <span>时间 : {item.lastEditTime}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    articleslist: state.getIn(['personhomepage', 'articleslist'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
