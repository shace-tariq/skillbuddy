import React, { useState, useEffect } from 'react';
import CardItem from '../components/CardItem';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  useEffect(() => {
    const dummyBlogs = [
      {
        title: "Top 5 Skills to Learn in 2025",
        imageUrl: "https://via.placeholder.com/300x200",
        date: "2025-04-28",
        description: "Stay ahead of the curve by mastering these future-proof skills.",
        buttonText: "Read Blog",
        comments: 12
      },
      {
        title: "The Rise of Remote Freelancing",
        imageUrl: "https://via.placeholder.com/300x200",
        date: "2025-04-20",
        description: "Explore how remote freelancing is reshaping the job market.",
        buttonText: "Explore",
        comments: 7
      },
      {
        title: "AI & Education: What to Expect",
        imageUrl: "https://via.placeholder.com/300x200",
        date: "2025-04-10",
        description: "A deep dive into how AI is transforming online education.",
        buttonText: "Learn More",
        comments: 4
      }
    ];

    setBlogs(dummyBlogs);
  }, []);

  const getSortedBlogs = () => {
    return [...blogs].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  };

  return (
    <div className="container my-4 blogs-page-container">
      <h1 className="text-center mb-4">Latest Blog Posts</h1>

      {/* 🔘 Sort Button */}
      <div className="text-center mb-3">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          Sort by Date: {sortOrder === 'asc' ? 'Oldest First' : 'Newest First'}
        </button>
      </div>

      <div className="row justify-content-center">
        {getSortedBlogs().map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <CardItem {...blog} customClass="blog-card" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
