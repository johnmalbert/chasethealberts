import React from 'react';
import '../VideoSection.css'; // Import the corresponding CSS for styling

const VideoSection = ({ videoUrl }) => (
  <div className="video-wrapper">
    <iframe
      src={videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  </div>
);

export default VideoSection;
