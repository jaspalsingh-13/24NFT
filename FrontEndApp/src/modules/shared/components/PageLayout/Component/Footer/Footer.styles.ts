import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    footer: {
      display: "flex",
      flex: 0,
      minheight: 100,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
