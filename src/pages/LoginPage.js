import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  Divider,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import { Input } from "@mui/icons-material";

const badgeStyle = {
  "& .MuiBadge-badge": {
    width: 35,
    height: 25,
    borderRadius: "50%",
    right: "-10px",
    fontFamily: "Teko !important",
    fontSize: 16,
  },
};

export default function LoginPage() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    const loginData = {
      userName: name,
      passWord: password,
    };

    console.log(userData);
    console.log(loginData);

    //Validation

    if (
      loginData.userName.toString().trim().toLowerCase() ===
        userData.userName.toString().trim().toLowerCase() &&
      loginData.passWord.toString().trim().toLowerCase() ===
        userData.passWord.toString().trim().toLowerCase()
    ) {
      alert("Success");
    } else {
      alert("Incorrect User and Password");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Grid container spacing={2}>
        <Card
          variant="outlined"
          sx={{
            minWidth: 400,
            margin: "auto",
            borderRadius: 4,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  margin: "6rem auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <YouTubeIcon sx={{ color: "red", fontSize: 80 }} />
                <Badge badgeContent={"IN"} color="default" sx={badgeStyle}>
                  <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        fontFamily: "Teko !important",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    YouTube
                  </Typography>
                </Badge>
                <Divider variant="middle" sx={{ borderColor: "#ffffff" }} />
              </Box>
              <TextField
                variant="outlined"
                label="User Name"
                fullWidth
                sx={{ marginBottom: 2 }}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                variant="outlined"
                label="Password"
                fullWidth
                sx={{ marginBottom: 2 }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button variant="outlined" onClick={handleSubmit}>
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
