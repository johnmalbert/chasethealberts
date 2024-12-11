import React, { useEffect } from "react";
import "../PhotoSection.css";

const PhotoSection = ({ photos }) => {

  useEffect(() => {
    // Ensure images are fully loaded before triggering animations
    const images = document.querySelectorAll('.photo');
    images.forEach(img => {
      img.onload = () => {
        img.classList.add('loaded'); // Add class when image is loaded
      };
    });
  }, []);

  return (
    <div className="photo-section">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`photo-${index}`}
          className="photo animate-on-scroll"
        />
      ))}
    </div>
  );
};

export default PhotoSection;
