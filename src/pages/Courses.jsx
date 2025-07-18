// src/pages/Courses.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../components/CardItem';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://skillbuddy-z4vt.onrender.com/api/courses');
        setCourses(res.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div
      style={{
        paddingTop: '120px', // Prevent heading hiding behind navbar
        paddingBottom: '50px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // ✅ Centers everything inside
      }}
    >
      <h1 className="text-center mb-4">Available Courses</h1>

      <div
        className="d-flex flex-wrap justify-content-center gap-4"
        style={{
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {courses.map((course, index) => (
          <div key={index} style={{ flex: '0 1 300px' }}>
            <CardItem
              title={course.name}
              imageUrl={course.image}
              strength={course.studentsEnrolled}
              courseCode={course.courseCode}
              instructor={course.instructor}
              description={course.description}
              buttonText="View Course"
              customClass="course-card"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
