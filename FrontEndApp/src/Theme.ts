import { ThemeOptions } from "@material-ui/core";

const Theme: ThemeOptions = {
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
  },
  palette: {
    common: {},
    primary: {
      main: "#101744",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#101744",
    },
    error: {
      main: "#f20000",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#101744",
      hint: "#CD263C",
    },
    divider: "#cbcdd5",
    background: {
      default: "#ffffff",
      paper: "#101744",
    },
    action: {
      active: "#c9c9c9",
      hover: "#d9d9d9",
      selected: "#c9c9c9",
    },
  },
};

export default Theme;
