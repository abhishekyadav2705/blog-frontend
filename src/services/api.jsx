// const BASE_URL = "http://localhost:8080/api/blogs";

const BASE_URL =
  "https://my-blog-backend-production-c525.up.railway.app/api/blogs";

export const getBlogs = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getBlogById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const addBlog = async (blog) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  return res.json();
};

export const likeBlog = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}/like`, {
    method: "POST",
  });
  return res.json();
};
