import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    dialogWrapper: {},
    paperSize: {
      width: "600px",
      display: "flex",
      flexDirection: "column",
      minHeight: 300,
    },
    header: {
      display: "flex",
      flex: 0,
      alignItems: "flex-start",
      color: theme.palette.text.primary,
      height: 50,
      justifyContent: "center",
      margin: 10,
    },
    title: {
      display: "flex",
      flex: 1,
      fontWeight: "revert",
      justifyContent: "center",
    },
    closeBtn: {
      width: 30,
      height: 30,

      textAlign: "center",
      cursor: "pointer",
      transition: ".2s",
      opacity: ".5",

      "&:hover": {
        opacity: "1",
      },
    },
    img: {
      height: 30,
      width: 30,
    },
    content: {
      flex: "1 1 auto",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "touch",

      "&:empty": {
        display: "none",
      },
      background: "white",
    },
    actions: {
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      margin: "24px 0 0 0",
      background: "white",
      "&:empty": {
        display: "none",
      },
    },
    loader: {
      position: "relative",
      minHeight: 200,
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "&:empty": {
        display: "none",
      },
    },
  });
