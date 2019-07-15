import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.scss";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

class SideNavItem extends Component {
  render() {
    return <div> side bar item</div>;
  }
}
export default withStyles(styles)(SideNavItem);
