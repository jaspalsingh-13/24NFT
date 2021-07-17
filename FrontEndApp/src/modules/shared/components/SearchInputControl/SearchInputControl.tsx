import React from "react";
import {
  withStyles,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

// icons
import SearchIcon from "@material-ui/icons/Search";

import { styles } from "./SearchInputControl.styles";

import { action, observable } from "mobx";
import { observer } from "mobx-react";
import { IClasses } from "../../interfaces";

type Props = {
  classes?: IClasses;
  placeHolder?: string;
  onSearch?: (searchValue: string) => void;
};

@observer
class SearchInputControl extends React.Component<Props> {
  readonly debounceTime: number = 300;
  @observable public searchValue: string = "";

  @action
  private onInputChange(searchValue: string): void {
    this.searchValue = searchValue;
  }

  render() {
    const { classes, placeHolder } = this.props;
    return (
      <FormControl fullWidth className={classes.formControl} variant="outlined">
        <OutlinedInput
          placeholder={placeHolder}
          value={this.searchValue}
          className={classes.conteiner}
          onChange={(e) => this.onInputChange(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(SearchInputControl);
export { SearchInputControl as PureSearchInputControl };
