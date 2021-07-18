import React, { Component, ReactNode } from "react";
import { LinearProgress, withStyles } from "@material-ui/core";
import { styles } from "./PageLayout.styles";
import { inject, observer } from "mobx-react";

import { IClasses } from "../../interfaces";
import { UIStore } from "../../stores";

import Footer from "./Component/Footer/Footer";

import Header from "./Component/Header/Header";

interface Props {
  classes?: IClasses;
  uiStore?: UIStore;
  isAuthenticated?: boolean;
}

interface States {
  menuTargetComponent: any;
}

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
        <Header />
        <div className={classes.contentWrapper}>
          {this.pageLoader}
          <div className={classes.content}>{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(PageLayout);
