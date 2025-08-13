import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const newBlog = {
      id: existingBlogs.length
        ? existingBlogs[existingBlogs.length - 1].id + 1
        : 1,
      title,
      content,
      likes: 0,
      createdAt: new Date().toISOString(),
    };
    const updatedBlogs = [...existingBlogs, newBlog];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    setSubmitted(true);
    setTitle("");
    setContent("");
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h5">Create New Blog</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={submitted}
        />
        <TextField
          fullWidth
          label="Content"
          margin="normal"
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          disabled={submitted}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ marginTop: 2 }}
          disabled={submitted}
        >
          Submit
        </Button>
      </form>
      {submitted && (
        <Typography sx={{ marginTop: 2, color: "green" }}>
          Thank you! Your blog has been added.
        </Typography>
      )}
    </Container>
  );
};

export default NewBlog;
