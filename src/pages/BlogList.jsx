import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initialBlogData } from "../data/blogs";
import "./BlogList.css";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Load from localStorage or initialize with initialBlogData
    const stored = JSON.parse(localStorage.getItem("blogs"));

    if (!stored) {
      localStorage.setItem("blogs", JSON.stringify(initialBlogData));
      setBlogs(initialBlogData);
    } else {
      // Merge initial blogs with stored to avoid duplicates
      const merged = [
        ...initialBlogData.filter(
          (ib) => !stored.some((sb) => sb.id === ib.id)
        ),
        ...stored,
      ];
      localStorage.setItem("blogs", JSON.stringify(merged));
      setBlogs(merged);
    }
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
