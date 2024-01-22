import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: 500,
  },
  searchBarBorderRadius: {
    borderRadius: 15,
  },
  palette: {
    primary: {
      main: "#808080",
    },
    customLeftBarColor: {
      main: "#030303",
    },
    customBottomBarColor: {
      main: "#282828",
    },
    customMiddleSectionColor: {
      main: "#121212",
    },
    customSearchBarBackgroundColor: {
      main: "#333232",
    },
  },
});

export default theme;
