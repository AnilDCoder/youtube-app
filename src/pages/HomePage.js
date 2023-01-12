import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import VideoCard from "../components/VideoCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //calling dummy api
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((response) => {
        console.log(response.products);
        setData(response.products);
      });
  }, []);

  return (
    <Grid container spacing={4}>
      {data.map((item) => (
        <Grid key={item.id} item xs={3}>
          <VideoCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePage;
