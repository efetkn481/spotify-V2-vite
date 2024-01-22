import theme from "./Theme";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import { ThemeProvider } from "styled-components";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.customMiddleSectionColor.main,
          height: "55px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginLeft: "10px",
          }}
        >
          <div className="headerPreviousButton">
            <ArrowBackIosIcon
              sx={{
                width: "15px",
                paddingLeft: "4px",
                color: theme.palette.primary.main,
              }}
            />
          </div>
          <div className="headerForwardButton">
            <ArrowForwardIosIcon
              sx={{
                width: "15px",
                paddingLeft: "4px",
                color: theme.palette.primary.main,
              }}
            />
          </div>
        </Box>

        <Input
          placeholder="Ara"
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.customSearchBarBackgroundColor.main,
            borderRadius: theme.searchBarBorderRadius.borderRadius,
            marginLeft: "3%",
            width: "20%",
            height: "55%",
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: theme.palette.primary.main,
                  paddingLeft: "30%",
                  marginRight: "15px",
                }}
              />
            </InputAdornment>
          }
        />

        <Box
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.customSearchBarBackgroundColor.main,
            borderRadius: theme.searchBarBorderRadius.borderRadius,
            padding: "0px 5px",
            height: "55%",
            display: "flex",
            alignItems: "center",
            margin: "0 30px 0 auto",
            width: "150px",
          }}
        >
          <img
            src="public\IMG-20231004-WA0023.jpg"
            alt="ProfilePic"
            style={{
              width: "20px",
              borderRadius: "20px",
              margin: "0px 10px 0px 5px",
            }}
          />
          <Typography
            sx={{
              fontSize: theme.typography.fontSize,
              fontFamily: theme.typography.fontFamily,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "170px",
            }}
          >
            Efecan Tekinnnnnnnnnnnnnnnnnnnnnn
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
