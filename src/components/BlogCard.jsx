import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <div className="border p-4 rounded shadow-md mb-4">
    <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
    <p className="text-gray-700 mb-2">{blog.description.slice(0, 100)}...</p>
    <div className="flex justify-between items-center">
      <Link to={`/blogs/${blog.id}`} className="text-blue-500">
        Read More
      </Link>
      <span>❤️ {blog.likes}</span>
    </div>
  </div>
);

export default BlogCard;
