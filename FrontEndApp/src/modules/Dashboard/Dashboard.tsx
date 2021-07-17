import React, { Component } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import { styles } from "./Dashboard.styles";
import { IClasses } from "../shared/interfaces";
import { RouteComponentProps } from "react-router";

import { observer } from "mobx-react";
import { ModalStore } from "../shared";

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
          <Button onClick={() => ModalStore.open(<div>hello man</div>)}>
            click here
          </Button>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
