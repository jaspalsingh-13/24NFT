import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginBottom: theme.spacing(1),
    },
    searchContainer: {
      display: "flex",
      alignItems: "center",
      "& $searchInput, & $selectInputControl, & $backButton": {
        marginRight: theme.spacing(1),
      },
    },
    backButton: {},
    searchInput: { width: 480 },
    selectInputControl: { minWidth: 130 },
    rightContent: {
      width: "100%",
      justifyContent: "flex-end",
    },
  });
