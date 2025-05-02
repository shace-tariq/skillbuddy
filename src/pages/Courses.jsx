// src/pages/Courses.jsx
import React from 'react';
import CardItem from '../components/CardItem';

function Courses() {
  // Optional: Later, fetch from API or JSON
  const courses = [
    {
      title: "Digital Marketing",
      imageUrl: "https://digiskills.pk/images/courses/SEO101_Image.png",
      strength: "1,200",
      buttonText: "Enroll Now"
    },
    {
      title: "Creative Writing",
      imageUrl: "https://digiskills.pk/images/courses/SEO101_Image.png",
      strength: "950",
      buttonText: "Start Learning"
    },
    {
      title: "SEO Basics",
      imageUrl: "https://digiskills.pk/images/courses/SEO101_Image.png",
      strength: "1,800",
      buttonText: "More Info"
    },
    {
      title: "Graphic Design",
      imageUrl: "https://digiskills.pk/images/courses/SEO101_Image.png",
      strength: "2,500",
      buttonText: "Enroll"
    }
  ];

  return (
    //make the div to center
    <div className="container my-4 d-flex justify-content-center flex-column align-items-center" style={{ marginLeft: '100px' , marginTop: '100px' }}>
    <h1 className="text-center mb-4">Available Courses</h1>
    <div className="row justify-content-center">
      {courses.map((course, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <CardItem {...course} customClass="course-card" />
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Courses;
