import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = ({ palette }: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flex: 1,
      padding: 10,
      justifyContent: "space-around",
    },
    content: {
      display: "flex",
      flex: 1,
      background: palette.secondary.main,
      borderRadius: 10,
      margin: 10,
      alignItems: "center",
      flexDirection: "column",
      boxShadow: `2px 2px 2px #ad9f9f`,
      overflow: "hidden",
    },
    titleContainer: {
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: palette.primary.main,
      width: "100%",
      flex: 0,
    },
    form: {
      display: "flex",
      flex: 1,
      padding: 20,
      width: "100%",
      alignItems: "center",
      flexDirection: "column",
    },
    inputControl: {
      display: "flex",
      boxShadow: `2px 2px 2px #ad9f9f`,
      borderRadius: 10,
      minWidth: "95%",
      flex: 0,

      height: "50px",
    },
    input: {
      display: "flex",
      justifyContent: "space-between",
      width: "50%",
      margin: 10,
    },
  });
