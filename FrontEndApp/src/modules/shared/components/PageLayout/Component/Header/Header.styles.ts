import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    layout: {
      display: "flex",
      flexDirection: "row",
      overflow: "hidden",
      justifyContent: "space-between",
    },
    header: {
      height: 100,
      display: "flex",
      justifyContent: "center",
    },
  });
