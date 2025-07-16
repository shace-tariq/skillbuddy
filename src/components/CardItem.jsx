// src/components/CardItem.jsx
import React from 'react';

function CardItem({ title, imageUrl, strength, instructor, description, courseCode, buttonText, customClass }) {
  return (
    <div className={`card ${customClass}`} style={{ width: '100%', maxWidth: '350px' }}>
      <img src={imageUrl} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p><strong>Course Code:</strong> {courseCode}</p>
        <p><strong>Instructor:</strong> {instructor}</p>
        <p><strong>Enrolled:</strong> {strength} students</p>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
}

export default CardItem;
