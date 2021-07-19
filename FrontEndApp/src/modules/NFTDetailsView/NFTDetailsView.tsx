import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import { styles } from "./NFTDetailsView.styles";
import { observer } from "mobx-react";

import { IClasses } from "../shared";

interface Props {
  classes?: IClasses;
  isAuthenticated?: boolean;
}

@observer
class NFTDetailsView extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.content}>image</div>
        <div className={classes.content}>
          <div className={classes.titleContainer}>
            <Typography variant="h3" color="textPrimary">
              title
            </Typography>
          </div>
          <Typography variant="h5" color="textSecondary">
            Current Status
          </Typography>
          <Typography variant="h6" color="textSecondary">
            XYZ
          </Typography>
          <div className={classes.form}>
            <div className={classes.inputControl}>
              <div className={classes.input}>
                <Typography variant="h6" color="textSecondary">
                  title
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  : title
                </Typography>
              </div>
              <div className={classes.input}>
                <Typography variant="h6" color="textSecondary">
                  title
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  : title
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NFTDetailsView);
