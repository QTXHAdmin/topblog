import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import { Input, Button } from 'antd';
import draftToHtml from 'draftjs-to-html';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import htmlToDraft from 'html-to-draftjs';
import { actionCreator } from './store';
import './style.less';
class Writeblog extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  render() {
    const { editorState } = this.state;
    const { inputvalue, userdata } = this.props;

    return (
      <Fragment>
        <div className="writelog-wrapper">
          <Input
            placeholder="输入标题"
            value={inputvalue}
            style={{ marginBottom: '20px' }}
            onChange={this.props.inputValue}
          />
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <textarea
            style={{ height: '300px', width: '600px', display: 'none' }}
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            ref="txt"
          />
        </div>
        <Button
          type="primary"
          style={{ marginTop: '30px' }}
          onClick={() =>
            this.props.Publishblog(this.refs, inputvalue, userdata)
          }
        >
          发布博客
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login']),
    inputvalue: state.getIn(['writeblog', 'inputValue']),
    userdata: state.getIn(['login', 'userdata'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Publishblog(refs, inputvalue, userdata) {
      let obj = {
        title: inputvalue,
        author: userdata.userName,
        wrap: refs.txt.value,
        del: false,
        author_id: userdata._id
      };
      dispatch(actionCreator.publishblog(obj));
    },
    inputValue(e) {
      console.log(e.target.value);
      dispatch(actionCreator.inputvalue(e.target.value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writeblog);
