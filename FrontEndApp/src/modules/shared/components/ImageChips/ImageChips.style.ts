import { createStyles, Theme } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

export const styles = ({ palette }: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      padding: 20,
      width: 400,
      border: `2px solid ${palette.primary.main}`,
      borderRadius: 10,
    },
    content: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    imageContainer: {
      height: 150,
      width: 150,
      minWidth: 150,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `2px solid ${palette.primary.main}`,
      borderRadius: 10,
      marginRight: 10,
      flex: 0,
    },
    flexRow: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  });
