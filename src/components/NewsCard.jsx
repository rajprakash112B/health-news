import React from 'react';

function NewsCard({ article }) {
  const { title, description, link, image_url } = article; 

  
  return (
    <div className="news-card">
      {image_url && (
        <img 
          src={image_url}
          alt={title} 
          //alt={image}
          className="news-card-image" 
        />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="read-more" target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
