// src/pages/Profile.js

import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

function Profile() {
  return (
    <Container sx={{ padding: "2rem", maxWidth: "800px" }}>
      <Box sx={{ textAlign: "center" }}>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQHXMBJhnNuO8w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710858274106?e=1750291200&v=beta&t=qlngfrCI-ZQ9ZUXsk3VdTeU_QL7n7t-T-VF_tLwml7o" // Your image URL
          alt="Abhishek"
          style={{
            borderRadius: "50%",
            marginBottom: "1.5rem",
            maxWidth: "150px", // Ensuring the image is not too large
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#1e3c72",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Hello, I'm Abhishek!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#444",
            marginTop: "1rem",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            fontFamily: "'Roboto', sans-serif", // Adding a clean font family for body text
          }}
        >
          I'm a passionate{" "}
          <span style={{ fontWeight: "bold", color: "#FF6F61" }}>
            software engineer
          </span>{" "}
          and{" "}
          <span style={{ fontWeight: "bold", color: "#FF6F61" }}>blogger</span>{" "}
          with a love for coding and technology. I specialize in building
          full-stack web applications using technologies like{" "}
          <span style={{ fontWeight: "bold", color: "#4CAF50" }}>Java</span>,{" "}
          <span style={{ fontWeight: "bold", color: "#4CAF50" }}>
            Spring Boot
          </span>
          , and{" "}
          <span style={{ fontWeight: "bold", color: "#4CAF50" }}>React</span>.
          When I'm not coding, you'll find me writing blogs about tech, life,
          and everything in between.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#444",
            marginTop: "1rem",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          I've built several projects like a{" "}
          <span style={{ fontWeight: "bold", color: "#FF6F61" }}>
            Uber Backend
          </span>{" "}
          with{" "}
          <span style={{ fontWeight: "bold", color: "#4CAF50" }}>
            Spring Boot
          </span>
          , and a{" "}
          <span style={{ fontWeight: "bold", color: "#FF6F61" }}>
            personal portfolio website
          </span>{" "}
          using{" "}
          <span style={{ fontWeight: "bold", color: "#4CAF50" }}>React</span>.
          Every project helps me improve my skills and keeps me excited about
          creating useful solutions. I aim to develop software that enhances
          people's lives and drives innovation.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#444",
            marginTop: "1rem",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Whether it's writing code or sharing my thoughts, I love inspiring
          others and helping them grow in the tech world. Feel free to reach out
          if you want to connect or collaborate!
        </Typography>

        <Box sx={{ marginTop: "2rem" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: "1rem" }}
            href="https://github.com/abhishekyadav2705" // Your GitHub link
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/abhishek-yadav-556228168/" // Your LinkedIn link
            target="_blank"
          >
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Profile;
