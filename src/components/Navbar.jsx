import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontFamily: "monospace",
              letterSpacing: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span style={{ color: "#fff" }}>Blog by</span>
            <span style={{ color: "#ffcc00" }}>Abhishek</span>
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                textTransform: "none",
                color: "#fff",
                borderRadius: "20px",
                px: 3,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/new"
              sx={{
                textTransform: "none",
                backgroundColor: "#ffffff",
                color: "#1e3c72",
                borderRadius: "20px",
                px: 3,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                },
              }}
            >
              New Blog
            </Button>
            <Button
              component={Link}
              to="/profile" // Link to Profile page
              sx={{
                textTransform: "none",
                backgroundColor: "#ffffff",
                color: "#1e3c72",
                borderRadius: "20px",
                px: 3,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                },
              }}
            >
              About Me
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
