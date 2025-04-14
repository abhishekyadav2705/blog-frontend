import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import NewBlog from "./pages/NewBlog";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/new" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
