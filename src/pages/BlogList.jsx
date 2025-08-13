import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogList.css";

const blogData = [
  {
    id: 1,
    title: "Mastering Java Streams API",
    content: `Java Streams API allows you to work with collections in a functional programming style. 
    You can filter, map, reduce, and sort data effortlessly. Using streams makes your code concise 
    and readable, and it encourages thinking in transformations rather than loops. Combine this 
    with lambda expressions and method references to write modern, elegant Java code. Streams are 
    a game-changer for data processing.`,
    likes: 12,
    createdAt: "2025-08-13T12:00:00",
  },
  {
    id: 2,
    title: "Life Lessons from Coding",
    content: `Coding teaches patience, persistence, and problem-solving. Every bug is a lesson in 
    humility, every error a chance to improve. In life, as in code, breaking down problems into 
    smaller steps makes them manageable. Learning from mistakes, iterating, and staying consistent 
    are skills that help in career and personal growth. The discipline from coding is a blueprint 
    for living intentionally.`,
    likes: 20,
    createdAt: "2025-08-12T10:30:00",
  },
  {
    id: 3,
    title: "Effective Java Best Practices",
    content: `Writing efficient, clean, and maintainable Java code is an art. Favor immutability, 
    use interfaces wisely, handle exceptions gracefully, and always write readable code. Utilizing 
    Collections and Streams efficiently can drastically reduce boilerplate. Following best practices 
    not only improves code quality but also your reputation as a developer. Small habits make a 
    huge difference.`,
    likes: 15,
    createdAt: "2025-08-11T15:00:00",
  },
  {
    id: 4,
    title: "Mindfulness for Developers",
    content: `Spending hours in front of a screen can be exhausting. Mindfulness practices help 
    developers maintain focus and reduce stress. Take short breaks, meditate for 5 minutes, or 
    just breathe deeply. These habits enhance clarity, creativity, and productivity. Being mindful 
    also helps in teamwork, communication, and decision-making. Balance your code with calm.`,
    likes: 18,
    createdAt: "2025-08-10T09:00:00",
  },
  {
    id: 5,
    title: "Java OOP Principles Simplified",
    content: `Object-Oriented Programming is the backbone of Java. Understanding classes, objects, 
    inheritance, polymorphism, and encapsulation is crucial. Encapsulation hides complexity, 
    inheritance promotes code reuse, and polymorphism enables flexible design. Mastering OOP 
    allows you to write scalable and maintainable applications. Think of objects as real-world 
    entities interacting logically.`,
    likes: 17,
    createdAt: "2025-08-09T13:30:00",
  },
  {
    id: 6,
    title: "Work-Life Balance for Coders",
    content: `Coding can be addictive, but balance is essential. Set boundaries, prioritize tasks, 
    and make time for hobbies and loved ones. Exercise and sleep are not optional—they recharge 
    your mind and body. A well-balanced life enhances creativity, focus, and happiness. Remember, 
    a good developer is not just measured by code output but by sustainable productivity.`,
    likes: 22,
    createdAt: "2025-08-08T18:00:00",
  },
  {
    id: 7,
    title: "Java Concurrency Made Simple",
    content: `Concurrency in Java can seem daunting, but mastering threads and synchronization 
    opens the door to high-performance applications. Use ExecutorService, CompletableFuture, 
    and synchronized blocks wisely. Understanding concurrent collections and avoiding deadlocks 
    are key. Concurrency is not just about speed, it's about writing reliable multi-threaded code 
    that works consistently.`,
    likes: 14,
    createdAt: "2025-08-07T11:00:00",
  },
  {
    id: 8,
    title: "Lessons on Persistence from Programming",
    content: `Programming teaches resilience. Debugging complex issues requires patience and 
    persistence. Similarly, in life, achieving goals demands consistency and learning from 
    failures. Each error or failed attempt is a stepping stone toward mastery. Cultivate grit, 
    keep iterating, and celebrate small wins—both in code and life.`,
    likes: 19,
    createdAt: "2025-08-06T16:30:00",
  },
  {
    id: 9,
    title: "Understanding React Hooks",
    content: `React hooks allow you to use state and other React features without writing a class. 
    They make your code simpler and more readable...`,
    likes: 12,
    createdAt: "2025-08-13T12:00:00",
  },
  {
    id: 10,
    title: "JavaScript ES6 Features",
    content: `ES6 brought many enhancements to JavaScript including arrow functions, template literals, 
    destructuring, default parameters, let & const, and more...`,
    likes: 8,
    createdAt: "2025-08-12T15:30:00",
  },
  {
    id: 11,
    title: "CSS Grid vs Flexbox",
    content: `CSS Grid and Flexbox are powerful layout systems. Flexbox is best for 1-dimensional layouts 
    (row or column), while Grid excels at 2-dimensional layouts (rows + columns)...`,
    likes: 15,
    createdAt: "2025-08-11T10:00:00",
  },
  // Add other blogs here...
];

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Load likes from localStorage
    const savedLikes = JSON.parse(localStorage.getItem("blogLikes")) || {};

    const updatedBlogs = blogData.map((blog) => ({
      ...blog,
      likes: savedLikes[blog.id] || blog.likes,
    }));

    setBlogs(updatedBlogs);
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
