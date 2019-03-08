import React, { Component } from 'react';

class Moment extends Component {
  constructor(props){
    super(props);
    this.state = {
      now:new Date().toLocaleTimeString(),
      timer:null
    };
  }
  componentDidMount(){
    this.setState({
      timer:setInterval(()=>{
        this.setState({
          now:new Date().toLocaleTimeString()
        });
      },1000)
    })
  }
  componentWillUnmount(){
    if(this.state.timer){
      clearInterval(this.state.timer);
    }
  }
  render() {
    return (
      <div>
        <span style={{fontSize:'30px'}}>Timer : {this.state.now}</span>  
      </div>
    );
  }
}

export default Moment;