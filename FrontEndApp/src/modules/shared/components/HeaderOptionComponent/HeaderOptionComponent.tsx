import React, { ReactNode } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import { styles } from "./HeaderOptionComponent.style";
import { IClasses } from "../../interfaces";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface Props {
  classes?: IClasses;
  label: string;
  onSelect: (option: string) => void;
  isActive?: boolean;
  navigator?: string;
}

class HeaderOptionComponent extends React.Component<Props> {
  static defaultProps: Props = {
    onSelect: () => null,
    label: "",
    isActive: false,
  };

  public render(): ReactNode {
    const { classes, label, navigator, isActive } = this.props;
    const buttonClass = classNames({
      [classes.linkButton]: true,
      [classes.activeLinkButton]: isActive,
    });
    return (
      <Button className={buttonClass} variant="contained" color="primary">
        <Link className={classes.link} to={`/${navigator}`}>
          <Typography color="inherit" variant="h6">
            {label}
          </Typography>
        </Link>
      </Button>
    );
  }
}
export default withStyles(styles)(HeaderOptionComponent);
