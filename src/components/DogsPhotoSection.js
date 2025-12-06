import React, { useEffect, useState } from "react";
import "../PhotoSection.css"; // Ensure you have the updated CSS linked

const DogsPhotoSection = ({ photos }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null); // Track the clicked image
  const [loadedImages, setLoadedImages] = useState(new Set()); // Track which images have been loaded

  useEffect(() => {
    // Create Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const index = parseInt(img.dataset.index, 10);
            
            // Load the image
            img.src = img.dataset.src;
            img.classList.add('loaded');
            
            // Track that this image has been loaded
            setLoadedImages((prev) => new Set(prev).add(index));
            
            // Stop observing this image
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
      }
    );

    // Observe all lazy images
    const lazyImages = document.querySelectorAll('.photo[data-src]');
    lazyImages.forEach((img) => observer.observe(img));

    return () => {
      lazyImages.forEach((img) => observer.unobserve(img));
    };
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
          {/* Image with lazy loading */}
          <img
            src={loadedImages.has(index) ? photo.src : ''} // Placeholder until loaded
            data-src={photo.src}
            alt={`dog-photo-${index}`}
            data-index={index}
            className="photo animate-on-scroll"
          />
          
          {/* Loading placeholder */}
          {!loadedImages.has(index) && (
            <div className="photo-placeholder"></div>
          )}
          
          {/* Title displayed inside the image at the top */}
          <div className="photo-title">{photo.title}</div>

          {/* Read Verse Button - visible on mobile when not active */}
          {activePhotoIndex !== index && (
            <div className="read-verse-button">
              <span>📖 Read Verse</span>
            </div>
          )}

          {/* Subtitle (Bible verse) only shows when the image is clicked */}
          {activePhotoIndex === index && (
            <div className="photo-subtitle">
              <div className="verse-content">{photo.subtitle}</div>
              <div className="close-hint">Tap to close</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DogsPhotoSection;
