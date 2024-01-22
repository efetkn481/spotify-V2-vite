import { Box, Typography } from "@mui/material";
import theme from "./Theme";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";
import "./App.css";

export default function BottomBar() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.customBottomBarColor.main,
        color: "white",
        height: "75px",
        position: "fixed",
        bottom: "0",
        display: "flex",
      }}
    >
      <Box
        sx={{
          margin: "15px 15px 15px 15px",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <Box sx={{ width: "120px" }}>
          <img
            src="public\albumcover.jpg"
            alt="AlbumCover"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Çalan Şarkı</Typography>

          <Typography
            sx={{ fontSize: "12px", color: theme.palette.primary.main }}
          >
            Sanatçı
          </Typography>
        </Box>
        <FavoriteBorderOutlinedIcon
          sx={{
            marginRight: "10px",
            fontSize: "20px",
            marginLeft: "5px",
            color: theme.palette.primary.main,
          }}
        />
        <CreditCardOutlinedIcon
          sx={{ fontSize: "20px", color: theme.palette.primary.main }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "900px",
        }}
      >
        <div style={{ marginBottom: 14, display: "flex", gap: 18 }}>
          <IconButton sx={{ padding: 0 }}>
            <SkipPreviousIcon sx={{ color: "white", fontSize: "25px" }} />
          </IconButton>
          <IconButton sx={{ padding: 0 }}>
            <PlayCircleOutlineRoundedIcon
              sx={{ color: "white", fontSize: "35px" }}
            />
          </IconButton>
          <IconButton sx={{ padding: 0 }}>
            <SkipNextIcon sx={{ color: "white", fontSize: "25px" }} />
          </IconButton>
        </div>
        <div className="playerLine"></div>
      </Box>
    </Box>
  );
}
