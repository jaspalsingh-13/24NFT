import React, { Component, ReactNode } from "react";
import {
  AppBar,
  Container,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import { styles } from "./PageLayout.styles";
import { inject, observer } from "mobx-react";

import { IClasses } from "../../interfaces";
import { UIStore } from "../../stores";
import SearchHeader from "../SearchHeader/SearchHeader";
import HeaderOptionComponent from "../HeaderOptionComponent/HeaderOptionComponent";
import { Facebook } from "@material-ui/icons";

interface Props {
  classes?: IClasses;
  uiStore?: UIStore;
  isAuthenticated?: boolean;
}

interface States {
  menuTargetComponent: any;
}

const options = [
  {
    label: "Market Place",
    navigator: "/",
  },
  {
    label: "Market Place",
    navigator: "/",
  },
  {
    label: "Market Place",
    navigator: "/",
  },
  {
    label: "Market Place",
    navigator: "/",
  },
];

@inject("uiStore")
@observer
class PageLayout extends Component<Props, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuTargetComponent: null,
    };
  }

  handleMenu(event: any) {
    this.setState({ menuTargetComponent: event.currentTarget });
  }

  handleClose() {
    this.setState({ menuTargetComponent: null });
  }

  toggleLoader() {
    const { pageLoading, setPageLoader } = this.props.uiStore;
    setPageLoader(!pageLoading);
    this.handleClose();
  }

  onLogout() {
    this.handleClose();
  }

  // Will add computed loader from anywhere in app
  private get pageLoader(): ReactNode {
    const { classes, uiStore } = this.props;
    if (!uiStore.pageLoading) {
      return null;
    }

    return (
      <div className={classes.loader}>
        <LinearProgress />
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.pageLayout}>
        <AppBar className={classes.header} position="static">
          <Toolbar className={classes.layout}>
            <SearchHeader onSearch={() => null} />
            {options.map(({ label, navigator }, index) => (
              <HeaderOptionComponent
                label={label}
                navigator={navigator}
                isActive={index === 0}
              />
            ))}
          </Toolbar>
        </AppBar>

        <div className={classes.contentWrapper}>
          {this.pageLoader}
          <div className={classes.content}>{this.props.children}</div>
        </div>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.footer}>
            <Typography variant="body1" color="inherit">
              Privacy Policy
            </Typography>
            <Typography variant="body1" color="inherit">
              Copyright © 2021 24NFT | Powered by Relinns Technology Pvt. Ltd
            </Typography>
            <div>
              <IconButton onClick={() => null}>
                <Facebook />
              </IconButton>
              <IconButton onClick={() => null}>
                <Facebook />
              </IconButton>
              <IconButton onClick={() => null}>
                <Facebook />
              </IconButton>
              <IconButton onClick={() => null}>
                <Facebook />
              </IconButton>
              <IconButton onClick={() => null}>
                <Facebook />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(PageLayout);
