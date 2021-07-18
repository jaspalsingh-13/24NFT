import React from "react";
import { Avatar, Typography, withStyles } from "@material-ui/core";
import { styles } from "./ImageChips.style";
import { IClasses, IImageChip } from "../../interfaces";

interface Props {
  classes?: IClasses;
  data: IImageChip;
}

const ImageChips: React.FC<Props> = ({ classes, data }) => {
  const { imgSrc, latestBid, signature, staked, timeLeft } = data;
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
          <Typography variant="h6">Staked:</Typography>
          <Typography variant="h6">{staked}</Typography>
        </div>
        <div className={classes.flexRow}>
          <Typography variant="h6">Latest bid:</Typography>
          <Typography variant="h6">{latestBid}</Typography>
        </div>
        <div className={classes.flexRow}>
          <Typography variant="h6">Time Left:</Typography>
          <Typography variant="h6">{timeLeft}</Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ImageChips);
