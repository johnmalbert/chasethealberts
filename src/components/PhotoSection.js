import React from "react";
import "../PhotoSection.css";

const PhotoSection = ({ photos }) => {
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
