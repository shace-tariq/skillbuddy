import React from 'react';
// import './CardItem.css';

function CardItem({ title, imageUrl, strength, date, description, buttonText, comments, customClass }) {
  return (
    <div className={`my-3 ${customClass || ''}`}>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={imageUrl || "https://via.placeholder.com/300x200"}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {description && <p className="card-text">{description}</p>}
          {strength && <p className="card-text">{strength} students enrolled</p>}
          {date && <p className="card-text"><strong>Date:</strong> {date}</p>}
          {buttonText && <button className="btn btn-sm btn-primary">{buttonText}</button>}
          {comments !== undefined && (
            <p className="card-text">
              {comments} comment{comments === 1 ? '' : 's'}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default CardItem;
