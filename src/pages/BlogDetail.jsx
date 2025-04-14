import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, likeBlog } from "../services/api";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    getBlogById(id).then(setBlog);
  }, [id]);

  const handleLike = async () => {
    setShowHeart(true); // Trigger heart
    await likeBlog(id);
    const updated = await getBlogById(id);
    setBlog(updated);
    setTimeout(() => setShowHeart(false), 2000); // Remove heart after animation
  };

  if (!blog) return <div className="loading">Loading...</div>;

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
