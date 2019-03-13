import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import Tables from './components/tables';
import { Button } from 'antd';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import './style.less';

class Classmanage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infolist: [],
      flag: false
    };
  }
  componentDidMount() {
    this.getinfolist();
  }
  render() {
    const { infolist } = this.state;
    return (
      <div className="clearfix">
        <div className="clearfix">
          <div className="search-wrap">
            <input
              ref="inputvalue"
              style={{ marginRight: '20px', width: 300 }}
            />
            <Button type="primary" onClick={this.addclass}>
              添加分类
            </Button>
          </div>
        </div>
        <table className="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>排序</th>
              <th>类别</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {infolist.map((item, index) => (
              <Tables
                key={item.id}
                user={item}
                flag={this.state.flag}
                handleDlete={this.handledelete}
                save={this.savenewinfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  getinfolist = async () => {
    const { data } = await axios.get('http://localhost:3003/classmanage');
    this.setState({
      infolist: data
    });
  };
  handledelete = async id => {
    await axios.delete('http://localhost:3003/classmanage/' + id);
    this.getinfolist();
  };
  addclass = async () => {
    const inputValue = this.refs.inputvalue.value;
    let obj = {
      class: inputValue,
      time: Date.now()
    };
    await axios.post('http://localhost:3003/classmanage', obj);
    this.getinfolist();
    this.refs.inputvalue.value = '';
  };
  //编辑没写完！！！！
  savenewinfo =async (user)=>{
    console.log(user);
   const {data} =await axios.put('http://localhost:3003/classmanage/'+user.id,user)
   console.log(data);
   const index =  this.state.infolist.findIndex(item=>item.id === user.id)
  //  const newinfolist =this.state.infolist.splice(index,1,data);
  //  console.log(newinfolist);
   this.setState({
    //  infolist:newinfolist
    infolist:[...this.state.infolist,this.state.infolist.splice(index,1,data)]
   })
   this.getinfolist();
  }
}

export default Classmanage;
