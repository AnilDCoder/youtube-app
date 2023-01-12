import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ item }) {
  const navigate = useNavigate();
  const handleDetail = (item) => {
    navigate("/detail");
  };

  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardActionArea
        sx={{ borderRadius: 3 }}
        onClick={() => handleDetail(item)}
      >
        <CardMedia
          component="img"
          height="190"
          image={item.thumbnail}
          alt="green iguana"
          sx={{ borderRadius: 3 }}
        />
      </CardActionArea>
      <CardContent sx={{ display: "flex" }}>
        <Avatar src={item.thumbnail} />
        <Box sx={{ marginLeft: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" color="text.secondary">
            {item.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {item.brand}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`${item.price} M Views`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
