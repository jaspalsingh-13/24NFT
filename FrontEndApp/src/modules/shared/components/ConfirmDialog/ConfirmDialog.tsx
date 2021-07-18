import { Button } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import Dialog from "../../Dialog/Dialog";
import { ModalStore } from "../../ModalKeeper";

interface Props {
  title: string;
  message: string;
  yesButton?: string;
  noButton?: string;
  yesButtonVariant?: "text" | "outlined" | "contained";
  noButtonVariant?: "text" | "outlined" | "contained";
  onNoClick: () => void;
  onYesClick: () => void;
}

class ConfirmDialog extends Component<Props> {
  static defaultProps = {
    yesButton: "Ok",
    noButton: "Cancel",
    yesButtonVariant: "contained",
    noButtonVariant: "contained",
  };

  public render(): ReactNode {
    const {
      yesButton,
      title,
      noButton,
      message,
      yesButtonVariant,
      noButtonVariant,
    } = this.props;
    return (
      <Dialog
        title={title}
        open={true}
        onClose={() => ModalStore.close()}
        dialogContent={() => <>{message}</>}
      />
    );
  }
}
export default ConfirmDialog;
