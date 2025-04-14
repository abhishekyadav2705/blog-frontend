import React, { useEffect, useState } from "react";
import { getBlogs } from "../services/api";
import { Link } from "react-router-dom";
import "./BlogList.css";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="container">
      <h1 className="title">🚀 Abhishek’s Digital Pages</h1>
      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs found.</p>
      ) : (
        <div className="grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <Link to={`/blogs/${blog.id}`} className="card-title">
                {blog.title}
              </Link>
              <p className="card-content">{blog.content.slice(0, 100)}...</p>
              <div className="card-footer">{blog.likes} ❤️ Likes</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;
