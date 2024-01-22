import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme";
import { Button, Typography } from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import "./App.css";

const buttonStyles = {
  textTransform: "none",
  paddingLeft: "10%",
};

const noWrapTypography = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  marginTop: "20%",
  marginLeft: "8%",
  fontSize: "12px",
  whiteSpace: "nowrap",
  lineHeight: "0.75",
  paddingBottom: "10px",
};

export default function LeftBar() {
  const playList = [];
  for (let index = 1; index < 11; index++) {
    playList.push("Çalma Listesi " + index);
  }

  return (
    <Box
      sx={{
        width: "15%",
        backgroundColor: theme.palette.customLeftBarColor.main,
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "calc(100% - 75px)",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            marginLeft:'15px',
            paddingTop: "10px",
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <img
            src="public\SpotifyIcon.svg"
            alt="SpotifyIcon"
            style={{
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            "@media (max-width: 600px)": {
              display: "block",
            },
            display: "none",
          }}
        >
          <img
            src="public\spo1.png"
            alt="SpotifyIcon"
            style={{ marginLeft: "17px", width: "50%", marginTop: "10px" }}
          />
        </Box>
        <Button
          sx={{
            ...buttonStyles,
            marginTop: "30px",
            "@media (max-width: 600px)": {
              marginLeft: "20px",
              minWidth: "5px",
            },
          }}
          startIcon={<HomeIcon />}
        >
          <Typography
            sx={{
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            Giriş
          </Typography>
        </Button>
        <Button
          sx={{
            ...buttonStyles,
            marginTop: "5px",
            "@media (max-width: 600px)": {
              marginLeft: "20px",
              minWidth: "5px",
            },
          }}
          startIcon={<SearchIcon />}
        >
          <Typography
            sx={{
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            Gözat
          </Typography>
        </Button>
        <Button
          sx={{
            ...buttonStyles,
            marginTop: "5px",
            "@media (max-width: 600px)": {
              marginLeft: "20px",
              minWidth: "5px",
            },
          }}
          startIcon={<LibraryBooksIcon />}
        >
          <Typography
            sx={{
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            Kitaplık
          </Typography>
        </Button>
        <Typography
          sx={{
            ...noWrapTypography,
            letterSpacing: "1px",
            paddingBottom: "9px",
            paddingTop: "1px",
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          ÇALMA LİSTELERİN
        </Typography>
        <Input
          placeholder="Ara"
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.customSearchBarBackgroundColor.main,
            borderRadius: theme.searchBarBorderRadius.borderRadius,
            marginLeft: "7%",
            width: "80%",
            marginTop: "10px",
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: theme.palette.primary.main,
                  paddingLeft: "10px",
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <FilterAltOutlinedIcon
                sx={{
                  color: theme.palette.primary.main,
                  paddingRight: "10px",
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}
              />
            </InputAdornment>
          }
        />
        <Box
          sx={{
            width: "100%",
            overflowX: "hidden",
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          {playList.map((item, index) => (
            <Typography
              key={index}
              sx={{
                ...noWrapTypography,
                marginTop: "20px",
                paddingTop: "2px",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </ThemeProvider>
    </Box>
  );
}
