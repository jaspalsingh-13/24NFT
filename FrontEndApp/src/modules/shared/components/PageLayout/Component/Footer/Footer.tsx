import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

import { styles } from "./Footer.styles";
import { withStyles } from "@material-ui/styles";
import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TelegramIcon,
  TwitterLogo,
} from "../../../../../../assets";

const Footer: React.FC<any> = ({ classes }) => {
  return (
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
            <img src={TwitterLogo} alt="loading" />
          </IconButton>
          <IconButton onClick={() => null}>
            <img src={FacebookIcon} alt="loading" />
          </IconButton>
          <IconButton onClick={() => null}>
            <img src={InstagramIcon} alt="loading" />
          </IconButton>
          <IconButton onClick={() => null}>
            <img src={TelegramIcon} alt="loading" />
          </IconButton>
          <IconButton onClick={() => null}>
            <img src={SpotifyIcon} alt="loading" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Footer);
