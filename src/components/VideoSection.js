import React from 'react';

const VideoSection = ({ videoUrl }) => (
  <div className="video-section">
    <iframe
      width="100%"
      height="500"
      src={videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  </div>
);

export default VideoSection;