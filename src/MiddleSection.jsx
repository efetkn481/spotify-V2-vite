import Box from "@mui/material/Box";
import theme from "./Theme";
import Header from "./Header";
import { Typography } from "@mui/material";
import MusicCard from "./MusicCard";

const titleTypographyStyles = {
  color: "white",
  fontFamily: theme.typography.fontFamily,
  fontSize: "28px",
  fontWeight: "bold",
  margin: "20px 0 0 25px",
};

export default function MiddleSection() {
  const musicCardArray = [];

  for (let i = 0; i < 5; i++) {
    musicCardArray.push(<MusicCard key={i} />);
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.customMiddleSectionColor.main,
        width: "calc(100% - 15%)",
        overflowY: "scroll",
        height: "calc(100% - 75px)",
      }}
    >
      <Header />
      <Typography
        sx={{
          ...titleTypographyStyles,
        }}
      >
        Yakında Çalanlar
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          padding: "15px 0 15px 20px",
        }}
      >
        {musicCardArray}
      </Box>
      <Typography
        sx={{
          ...titleTypographyStyles,
        }}
      >
        Tavsiye Edilenler
      </Typography>
      <Typography
        sx={{
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.primary.main,
          fontSize: theme.typography.fontSize,
          marginLeft: "25px",
        }}
      >
        Sevdiğin her şeyden biraz dinle.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          padding: "15px 0 15px 20px",
        }}
      >
        {musicCardArray}
      </Box>
    </Box>
  );
}
