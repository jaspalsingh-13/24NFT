import React from "react";
import { Avatar, Typography, withStyles } from "@material-ui/core";
import { styles } from "./SignatureChip.styles";
import { IClasses, IImageChip } from "../../interfaces";

interface Props {
  classes?: IClasses;
  data: IImageChip;
}

const SignatureChip: React.FC<Props> = ({ classes, data }) => {
  const { imgSrc, latestBid, signature, staked } = data;
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Avatar src={imgSrc} />
      </div>
      <div className={classes.content}>
        <div className={classes.flexRow}>
          <Typography variant="h6">Signature:</Typography>
          <Typography variant="h6">{signature}</Typography>
        </div>
        <div className={classes.flexRow}>
          <Typography variant="h6">My stake:</Typography>
          <Typography variant="h6">{staked}</Typography>
        </div>
        <div className={classes.flexRow}>
          <Typography variant="h6">Total stake:</Typography>
          <Typography variant="h6">{latestBid}</Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SignatureChip);
