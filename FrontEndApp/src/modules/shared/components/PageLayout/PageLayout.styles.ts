import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    pageLayout: {
      minHeight: window.innerHeight,
      display: "flex",
      flexDirection: "column",
    },

    contentWrapper: {
      display: "flex",
      width: "100%",
      height: "auto", // minus header height
      position: "relative",
      flex: 1,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      minHeight: "100%",
      overflowY: "auto",
      padding: "10px 25px 10px 25px",
    },
    loader: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
    },
  });
