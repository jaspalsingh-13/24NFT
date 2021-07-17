import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    pageLayout: {
      minHeight: window.innerHeight,
      display: "flex",
      flexDirection: "column",
    },
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
    imageView: {
      maxWidth: 100,
    },
    link: {
      color: theme.palette.text.primary,
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
      height: "100%",
      overflowY: "auto",
      padding: "10px 25px 10px 25px",
    },
    loader: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
    },
    profileView: {
      display: "flex",
      justifyContent: "center",
    },
    titleContainer: {
      display: "flex",

      justifyContent: "center",
      flex: 0,
    },
    title: {
      fontFamily: '"Ubuntu", sans-serif',
      fontSize: 16,
    },
    menuItem: {
      fontFamily: '"Ubuntu", sans-serif',
      fontSize: 14,
      color: theme.palette.primary.main,
    },
    icons: {
      height: 100,
    },
    footer: {
      display: "flex",
      flex: 0,
      minheight: 100,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
  });
