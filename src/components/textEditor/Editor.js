import React, { Component } from "react";
import ReactQuill from "react-quill";
import _ from "lodash";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import style from "./style.js";
import RenderHTML from "react-render-html";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: ""
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.editorcontainer}>
        <ReactQuill value={this.state.text} onChange={this.updateBody} />
      </div>
    );
  }

  updateBody = async val => {
    await this.setState({ text: val });
    this.update();
  };
  updateTitle = async txt => {
    await this.setState({ title: txt });
    this.update();
  };

  update = _.debounce(() => {
    console.log("updated database");
  }, 1500);
}

export default withStyles(style)(Editor);
