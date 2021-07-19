import React, { Component } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import { styles } from "./Dashboard.styles";
import { IClasses } from "../shared/interfaces";
import { RouteComponentProps } from "react-router";
import Web3 from "web3";

import { observer } from "mobx-react";
import { ModalStore } from "../shared";
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

  componentDidMount() {
    this.connect();
  }

  async connect(): Promise<any> {
    if (!window.ethereum) {
      alert("connect to metamax first !");
      return;
    }

    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((s: any) => {
        debugger;
      })
      .catch((err: any) => {
        debugger;
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error// If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
    return;
  }

  async getChainId() {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    console.log(chainId);
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <Typography variant="h4">Dashboard</Typography>
          <Button onClick={() => this.getChainId()} color="primary">
            click here
          </Button>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
