import React from "react";
import { withStyles } from "@material-ui/core/styles";
import style from "./style.scss";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebaritem/sidebarItem";

import React, { Component } from "react";

class SideNav extends Component {
  render() {
    return <div>sidebar</div>;
  }
}

export default withStyles(style)(SideNav);
