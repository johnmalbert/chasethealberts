import React, { useEffect, useState } from "react";
import "../PhotoSection.css";

const PhotoSection = ({ photos }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null); // Store the index of the clicked image

  useEffect(() => {
    // Ensure images are fully loaded before triggering animations
    const images = document.querySelectorAll('.photo');
    images.forEach(img => {
      img.onload = () => {
        img.classList.add('loaded'); // Add class when image is loaded
      };
    });
  }, []);

  // Handle image click
  const handleImageClick = (index) => {
    // If the clicked image is already active, deactivate it; otherwise, set the new active index
    setActivePhotoIndex(activePhotoIndex === index ? null : index);
  };

  return (
    <div className="photo-section">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`photo-container ${activePhotoIndex === index ? 'active' : ''}`}
          onClick={() => handleImageClick(index)}
        >
          <img
            src={photo.src}
            alt={`photo-${index}`}
            className="photo animate-on-scroll"
          />
          {/* Subtitle only shows when the image is clicked */}
          {activePhotoIndex === index && (
            <div className="photo-subtitle">{photo.subtitle}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoSection;
