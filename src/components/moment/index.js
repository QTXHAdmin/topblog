import React, { Component, Fragment } from 'react';
import './style.less';
class Moment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleTimeString(),
      timer: null
    };
  }
  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({
          now: new Date().toLocaleTimeString()
        });
      }, 1000)
    });
  }
  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
  }
  render() {
    return (
      <Fragment>
        <span
          className="clock"
          style={{ fontSize: '26px', fontWeight: 'bold' }}
        >
          Today : {this.state.now}
        </span>
      </Fragment>
    );
  }
}

export default Moment;
