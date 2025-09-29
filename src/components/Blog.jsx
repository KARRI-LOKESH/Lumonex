import React from "react";
import "../styles/Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Innovative Architectural Lighting Trends 2025",
    date: "September 15, 2025",
    excerpt:
      "Explore the latest trends in architectural lighting that are transforming spaces and enhancing building aesthetics.",
  },
  {
    id: 2,
    title: "Sustainable Lighting Solutions for Modern Buildings",
    date: "August 28, 2025",
    excerpt:
      "Learn how energy-efficient and eco-friendly lighting designs are helping reduce environmental impact while improving ambiance.",
  },
  {
    id: 3,
    title: "Maximizing Interior Spaces with Creative Lighting",
    date: "July 10, 2025",
    excerpt:
      "Discover techniques for using light to highlight architectural details, create moods, and optimize interior design.",
  },
  {
    id: 4,
    title: "Facade Lighting: Making Buildings Stand Out",
    date: "June 5, 2025",
    excerpt:
      "A guide to illuminating building exteriors with precision lighting, emphasizing design, and increasing visual appeal.",
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-heading">LUMONEX BLOG</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3 className="blog-title">{post.title}</h3>
            <span className="blog-date">{post.date}</span>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
