import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: this.props.flag,
      beforecontent:{...this.props.user}
    };
  }
  render() {
    const { user }= this.props;
    let {beforecontent} = this.state;
    return (
      <Fragment>
        <tr>
        {this.state.flag ? (
          <Fragment>
                <td>
                  <input type="text" value={beforecontent.id} name="id" onChange={this.changevalue}/>
                </td>
                <td>
                  <input type="text" value={beforecontent.class} name="class" onChange={this.changevalue}/>
                </td>
                <td>
                  <input type="text" value={beforecontent.time} name="time" onChange={this.changevalue}/>
                </td>
                <td>
                  <Button onClick={()=>this.props.save(beforecontent).then(res=>{
                    this.setState({
                      flag:false
                    })
                  })}>保存</Button>
                  <Button onClick={this.cancel}>取消</Button>
                </td>
          </Fragment>
        ) : (
          <Fragment>
              <td>{user.id}</td>
              <td>{user.class}</td>
              <td>{user.time}</td>
              <td>
                <Button onClick={this.edit}>编辑</Button>
                <Button
                  type="danger"
                  onClick={() => this.props.handleDlete(user.id)}
                >
                  删除
                </Button>
              </td>
          </Fragment>
        )}
        </tr>
      </Fragment>
    );
  }
  edit = () => {
    this.setState({
      flag: true
    });
  };
  cancel = () => {
    this.setState({
      flag: false
    });
  };
  changevalue =(e) =>{
    this.setState({
      beforecontent:{
        ...this.state.beforecontent,
        [e.target.name]: e.target.value
      }
    })
  }
}

export default Tables;
