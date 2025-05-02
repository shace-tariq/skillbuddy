// src/components/CardItem.jsx
import React from 'react';
// import './CardItem.css'; // Create this file for custom styling

function CardItem({ title, imageUrl, strength, description, buttonText, customClass }) {
  return (
    <div className={`my-3 ${customClass || ''}`}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl || "https://via.placeholder.com/300x200"}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {description && <p className="card-text">{description}</p>}
          {strength && <p className="card-text">{strength} students enrolled</p>}
          {buttonText && <button className="btn btn-sm btn-primary">{buttonText}</button>}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
