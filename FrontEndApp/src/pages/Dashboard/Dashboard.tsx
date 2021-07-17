import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import { styles } from "./Dashboard.styles";
import { IClasses } from "../../interfaces";
import { RouteComponentProps } from "react-router";

import { observer } from "mobx-react";

interface Props extends RouteComponentProps {
  classes: IClasses;
}

@observer
class Dashboard extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <Typography variant="h4">Dashboard</Typography>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
