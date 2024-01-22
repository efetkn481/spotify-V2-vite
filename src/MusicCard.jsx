import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import theme from "./Theme";

export default function MusicCard() {
  return (
    <Card
      sx={{
        width: 170,
        padding: 1,
        backgroundColor: theme.palette.customBottomBarColor.main,
        borderRadius: 2,
      }}
    >
      <CardMedia
        sx={{ height: 140, margin: "2px" }}
        image="/albumcover.jpg"
        title="album-cover"
      />
      <CardContent sx={{ paddingLeft: "2px" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: theme.typography.fontSize,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Çalma Listesi
        </Typography>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: "12px",
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Çalma Listesi Açıklaması
        </Typography>
      </CardContent>
    </Card>
  );
}
