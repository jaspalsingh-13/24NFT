import React, { ReactNode } from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./SearchHeader.styles";
import { IClasses } from "../../interfaces";
import SearchInputControl from "../SearchInputControl/SearchInputControl";

interface Props {
  classes?: IClasses;
  searchPlaceHolder?: string;
  onSearch: (searchValue: string) => void;
  rightContent?: ReactNode;
}

class SearchHeader extends React.Component<Props> {
  static defaultProps = {
    searchPlaceHolder: "Search",
    onChipAddOrRemove: () => "",
  };

  private get searchControl(): ReactNode {
    return (
      <SearchInputControl
        placeHolder={"Search for an item or an account"}
        onSearch={(searchValue: string) => this.props.onSearch(searchValue)}
      />
    );
  }

  public render(): ReactNode {
    const { classes, rightContent } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.searchContainer}>
          <div className={classes.searchInput}>{this.searchControl}</div>
        </div>
        <div className={classes.rightContent}>{rightContent}</div>
      </div>
    );
  }
}
export default withStyles(styles)(SearchHeader);
export { SearchHeader as PureSearchHeader };
