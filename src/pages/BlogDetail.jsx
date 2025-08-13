import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { initialBlogData } from "../data/blogs";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    // Load from localStorage, merge with initial blogs
    const stored = JSON.parse(localStorage.getItem("blogs")) || [];
    const merged = [
      ...initialBlogData.filter((ib) => !stored.some((sb) => sb.id === ib.id)),
      ...stored,
    ];
    localStorage.setItem("blogs", JSON.stringify(merged));

    const found = merged.find((b) => b.id === parseInt(id));
    if (found) setBlog(found);
  }, [id]);

  const handleLike = () => {
    setShowHeart(true);
    setBlog((prev) => {
      const newLikes = prev.likes + 1;
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const updatedBlogs = blogs.map((b) =>
        b.id === prev.id ? { ...b, likes: newLikes } : b
      );
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      return { ...prev, likes: newLikes };
    });
    setTimeout(() => setShowHeart(false), 2000);
  };

  if (!blog) return <div className="loading">Blog not found.</div>;

  const formattedDate = new Date(blog.createdAt).toLocaleString();

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Blogs
      </button>
      <h1 className="detail-title">{blog.title}</h1>
      <p className="detail-meta">
        📅 {formattedDate} | ❤️ {blog.likes} likes
      </p>
      <div className="detail-content">{blog.content}</div>
      <div className="like-area">
        <button className="like-button" onClick={handleLike}>
          Like ❤️
        </button>
        {showHeart && <span className="heart-float">❤️</span>}
      </div>
    </div>
  );
}

export default BlogDetail;
