import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette }: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      borderRadius: 30,
      overflow: "hidden",
      marginLeft: 20,
    },
    conteiner: {
      backgroundColor: palette.background.default,
      color: palette.primary.main,
      borderRadius: 30,
      overflow: "hidden",
    },
  });
