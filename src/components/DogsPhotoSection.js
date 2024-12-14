import React, { useEffect, useState } from "react";
import "../PhotoSection.css"; // Ensure you have the updated CSS linked

const DogsPhotoSection = ({ photos }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null); // Track the clicked image

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
          {/* Image */}
          <img
            src={photo.src}
            alt={`dog-photo-${index}`}
            className="photo animate-on-scroll"
          />
          
          {/* Title displayed inside the image at the top */}
          <div className="photo-title">{photo.title}</div>

          {/* Subtitle (Bible verse) only shows when the image is clicked */}
          {activePhotoIndex === index && (
            <div className="photo-subtitle">{photo.subtitle}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DogsPhotoSection;
