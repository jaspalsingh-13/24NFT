import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = ({ palette }: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      padding: 20,
      width: 300,
      position: "relative",
      height: "300px",
    },
    content: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      border: `2px solid ${palette.primary.main}`,
      borderRadius: 10,
      height: "50%",
      justifyContent: "flex-end",
      padding: 10,
    },
    imageContainer: {
      height: 100,
      minWidth: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `2px solid ${palette.primary.main}`,
      borderRadius: 10,
      position: "absolute",
      top: 0,
      marginLeft: "auto",
      marginRight: "auto",
      transform: "translate(100%, 0)",
      background: palette.secondary.main,
    },
    flexRow: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  });
