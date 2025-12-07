import React, { useEffect, useState } from 'react';
import PhotoSection from '../components/PhotoSection';
import VideoSection from '../components/VideoSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../Home.css'; // Reuse the same styles as the home page

// Define the photos for the Iceland page with their subtitles
const icelandPhotos = [
  { src: '/images/iceland/iceland1.jpg', subtitle: 'Iceland Adventure' },
  { src: '/images/iceland/iceland2.jpg', subtitle: 'Iceland Landscapes' },
  { src: '/images/iceland/iceland3.jpg', subtitle: 'Iceland Journey' },
  { src: '/images/iceland/iceland4.jpg', subtitle: 'Iceland Views' },
  { src: '/images/iceland/iceland5.jpg', subtitle: 'Iceland Exploration' },
  { src: '/images/iceland/iceland6.jpg', subtitle: 'Iceland Scenery' },
  { src: '/images/iceland/iceland7.jpg', subtitle: 'Iceland Highlands' },
  { src: '/images/iceland/iceland8.jpg', subtitle: 'Iceland Beauty' },
  { src: '/images/iceland/iceland9.jpg', subtitle: 'Iceland Wonders' },
  { src: '/images/iceland/iceland10.jpg', subtitle: 'Iceland Nature' },
  { src: '/images/iceland/iceland11.jpg', subtitle: 'Iceland Trail' },
  { src: '/images/iceland/iceland12.jpg', subtitle: 'Iceland Mountains' },
  { src: '/images/iceland/iceland13.jpg', subtitle: 'Iceland Wilderness' },
  { src: '/images/iceland/iceland14.jpg', subtitle: 'Iceland Discovery' },
  { src: '/images/iceland/iceland15.jpg', subtitle: 'Iceland Horizon' },
  { src: '/images/iceland/iceland16.jpg', subtitle: 'Iceland Vista' },
  { src: '/images/iceland/iceland17.jpg', subtitle: 'Iceland Peaks' },
  { src: '/images/iceland/iceland18.jpg', subtitle: 'Iceland Journey' }
];

const Iceland = () => {
  // State to store the photos with their subtitles
  const [featuredPhotos, setFeaturedPhotos] = useState([]);

  // Shuffle the photos every time the component mounts
  useEffect(() => {
    const shuffledPhotos = [...icelandPhotos];
    shuffledPhotos.sort(() => Math.random() - 0.5); // Shuffle the photos
    setFeaturedPhotos(shuffledPhotos);
  }, []);

  const featuredVideoUrl = "https://www.youtube.com/embed/Nq9J11NV5GM?si=TliVfeH7VP7mjR-8"; // Replace with Iceland-specific video if desired

  // Trigger scroll animations
  useScrollAnimation();

  return (
    <div className="home-container">
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <h2>Photos from Iceland</h2>
        <PhotoSection photos={featuredPhotos} />
      </section>

      {/* Featured Video Section */}
      <section className="featured-video">
        <h2>Explore Iceland</h2>
        <VideoSection videoUrl={featuredVideoUrl} />
      </section>

    {/* About Us Section */}
    <section className="about-us">
    <h2>About Us</h2>
    <div className="about-us-content">
        <img 
        src="/images/logo.jpg" 
        alt="Our Logo" 
        className="about-us-logo" 
        />
        <p>
        We're the Alberts, a couple passionate about travel, backpacking, and mountaineering.
        We have found that sometimes the only way to recharge is to step away and unplug in the mountains, 
        and these images attempt to capture that feeling.
        </p>
        <img 
        src="/images/profile.jpg"
        alt="Profile" 
        className="about-us-logo about-us-right-image" 
        />
    </div>
    </section>

    {/* Back to Top Link */}
    <div style={{ textAlign: 'center', margin: '40px 0', paddingBottom: '20px' }}>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ 
          color: '#ffa726', 
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.1rem', 
          fontWeight: 'bold',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.color = '#00332a'}
        onMouseLeave={(e) => e.target.style.color = '#ffa726'}
      >
        ↑ Back to Top
      </button>
    </div>
    </div>
  );
};

export default Iceland;
