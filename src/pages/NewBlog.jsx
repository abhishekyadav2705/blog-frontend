import React, { useState } from "react";
import { addBlog } from "../services/api";
import { TextField, Button, Container, Typography } from "@mui/material";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBlog({ title, content });
    setTitle("");
    setContent("");
    alert("Blog added successfully!");
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
        />
        <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default NewBlog;
