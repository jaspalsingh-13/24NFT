import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import { styles } from "./Header.styles";
import { withStyles } from "@material-ui/styles";
import { AppLogo } from "../../../../../../assets";
import SearchHeader from "../../../SearchHeader/SearchHeader";
import { HeaderOptions } from "./HeaderOptions";
import HeaderOptionComponent from "../../../HeaderOptionComponent/HeaderOptionComponent";

const Header: React.FC<any> = ({ classes }) => {
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar className={classes.layout}>
        <img src={AppLogo} alt="loading"></img>
        <SearchHeader onSearch={() => null} />
        {HeaderOptions.map(({ label, navigator }, index) => (
          <HeaderOptionComponent
            label={label}
            key={index}
            navigator={navigator}
            isActive={index === 0}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
