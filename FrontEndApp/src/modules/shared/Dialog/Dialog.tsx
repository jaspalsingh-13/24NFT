import * as React from "react";
import { isObservable, toJS } from "mobx";
import { observer } from "mobx-react";
import {
  Dialog as MaterialDialog,
  Typography,
  withStyles,
} from "@material-ui/core";

import { IModal } from "./types";

import { styles } from "./Dialog.styles";
import { IClasses } from "../interfaces";
import { CloseIcon } from "../../../assets";

interface Props extends IModal {
  classes?: IClasses;
}

@observer
class Dialog extends React.Component<Props> {
  public static defaultProps = {
    title: "",
    dialogContent: () => <></>,
    dialogActions: () => <></>,
    closeBtn: true,
    fullScreen: false,
    onEnter: () => false,
    open: false,
    isLoading: () => false,
    onClose: () => false,
  };

  public get loader(): React.ReactNode {
    if (!this.props.isLoading()) {
      return null;
    }
    return <div>Loading...</div>;
  }

  public get header(): React.ReactNode {
    return (
      <React.Fragment>
        {this.title}
        {this.closeButton}
      </React.Fragment>
    );
  }

  public get title(): React.ReactNode {
    const { classes, title } = this.props;

    return title instanceof Function ? (
      title()
    ) : (
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    );
  }

  public get closeButton(): React.ReactNode {
    const { classes, closeBtn, onClose } = this.props;

    if (!closeBtn) {
      return null;
    }

    return (
      <div className={classes.closeBtn} onClick={onClose}>
        <img className={classes.img} src={CloseIcon} alt="loading..." />
      </div>
    );
  }

  public get content(): React.ReactNode {
    const content = this.props.dialogContent();
    const isLoading = this.props.isLoading();

    if (isLoading || !content) {
      return null;
    }

    const displayedContent = isObservable(content) ? toJS(content) : content;

    return <React.Fragment>{displayedContent}</React.Fragment>;
  }

  public get actions(): React.ReactNode {
    const actions = this.props.dialogActions();

    if (!actions) {
      return null;
    }

    const displayedActions = isObservable(actions) ? toJS(actions) : actions;

    return <React.Fragment>{displayedActions}</React.Fragment>;
  }

  public render() {
    const { classes, fullScreen, open, onClose, onEnter } = this.props;

    return (
      <MaterialDialog
        classes={{
          root: classes.dialogWrapper,
          paper: classes.paperSize,
        }}
        BackdropProps={{
          id: "dialogBackdrop",
        }}
        maxWidth={false}
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        onEnter={onEnter}
      >
        <div className={classes.header}>
          {this.title}
          {this.closeButton}
        </div>

        <div className={classes.loader}>{this.loader}</div>

        <div className={classes.content}>{this.content}</div>

        <div className={classes.actions}>{this.actions}</div>
      </MaterialDialog>
    );
  }
}

export default withStyles(styles)(Dialog);
export { Dialog as PureDialog };
