import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import './style.less';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { Input } from 'antd';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// const EditorComponent = () => <Editor />
class Writeblog extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <Fragment>
       <div>
       <Input placeholder="输入标题" style={{marginBottom:'20px'}} />
       <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
         style={{height:'300px',width:'600px',display:'none'}}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
       </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writeblog);
