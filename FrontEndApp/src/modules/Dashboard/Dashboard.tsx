import React, { Component } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import { styles } from "./Dashboard.styles";
import { IClasses } from "../shared/interfaces";
import { RouteComponentProps } from "react-router";

import { observer } from "mobx-react";
import { ModalStore, SignatureChip } from "../shared";
import ConfirmDialog from "../shared/components/ConfirmDialog/ConfirmDialog";

interface Props extends RouteComponentProps {
  classes: IClasses;
}

@observer
class Dashboard extends Component<Props> {
  openDialog() {
    ModalStore.open(
      <ConfirmDialog
        title="Confirm Delete"
        message="Are you sure you want to remove this Account?"
        yesButton="Delete"
        onNoClick={() => ModalStore.close()}
        onYesClick={() => {
          console.log("yes clicked");
          ModalStore.close();
        }}
      />
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <Typography variant="h4">Dashboard</Typography>
          <Button onClick={() => this.openDialog()} color="primary">
            click here
          </Button>
          <SignatureChip
            data={{
              imgSrc: "",
              latestBid: "",
              signature: "",
              timeLeft: "",
              staked: "",
            }}
          />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
