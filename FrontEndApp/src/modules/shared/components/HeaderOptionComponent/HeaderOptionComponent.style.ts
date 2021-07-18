import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = ({ palette }: Theme) =>
  createStyles({
    link: {
      color: "#ffffff",
      textDecoration: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    linkButton: {
      minWidth: "200px",
      borderWidth: 1,
      borderColor: palette.secondary.main,
      borderRadius: 40,
      height: 60,
    },
    activeLinkButton: {
      border: `2px solid ${palette.secondary.main}`,
    },
  });
