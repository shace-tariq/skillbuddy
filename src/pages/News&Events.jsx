import React, { useState, useEffect } from 'react';
import CardItem from '../components/CardItem';

function NewsEvents() {
  const [newsItems, setNewsItems] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  useEffect(() => {
    const dummyNews = [
      {
        title: "SkillBuddy Launch Webinar",
        imageUrl: "https://via.placeholder.com/300x200",
        date: "2025-05-10",
        description: "Join us for the launch event of SkillBuddy's newest features!",
        buttonText: "Read More"
      },
      {
        title: "AI in Education Panel",
        imageUrl: "https://via.placeholder.com/300x200",
        date: "2025-06-01",
        description: "Experts discuss the role of AI in personalized learning.",
        buttonText: "Register Now"
      },
      {
        title: "National E-Learning Expo",
        imageUrl: "https://via.placeholder.com/300x200",
        date: "2025-04-15",
        description: "Visit booths, meet instructors, and learn about online education trends.",
        buttonText: "Explore"
      }
    ];

    setNewsItems(dummyNews);
  }, []);

  // 🔁 Sort function
  const getSortedNews = () => {
    return [...newsItems].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  };

  return (
    <div className="container my-4 news-page-container">
      <h1 className="text-center mb-4">News & Events</h1>

      {/* 🔘 Sort Toggle */}
      <div className="text-center mb-3">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          Sort by Date: {sortOrder === 'asc' ? 'Oldest First' : 'Newest First'}
        </button>
      </div>

      <div className="row justify-content-center">
        {getSortedNews().map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <CardItem {...item} customClass="news-card" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsEvents;
