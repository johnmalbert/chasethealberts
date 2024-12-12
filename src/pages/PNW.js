import React, { useEffect, useState } from 'react';
import PhotoSection from '../components/PhotoSection';
import VideoSection from '../components/VideoSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../Home.css'; // Reuse the same styles as the home page

const pnwPhotos = [
  { src: '/images/pnw/photo1.jpg', subtitle: 'John diving into Raven Lake' },
  { src: '/images/pnw/photo2.jpg', subtitle: 'Fresh huckleberries' },
  { src: '/images/pnw/photo3.jpg', subtitle: 'Raven lake to ourselves' },
  { src: '/images/pnw/photo4.jpg', subtitle: 'Silent Lakes at sunset' },
  { src: '/images/pnw/photo5.jpg', subtitle: 'Overlooking BC' },
  { src: '/images/pnw/photo6.jpg', subtitle: 'Golden Ears' },
  { src: '/images/pnw/photo7.jpg', subtitle: 'Golden Ears' },
  { src: '/images/pnw/photo8.jpg', subtitle: 'Shelter above the clouds' },
  { src: '/images/pnw/photo9.jpg', subtitle: 'Golden Ears' }
];

const PNW = () => {
  // State to store the photos with their subtitles
  const [featuredPhotos, setFeaturedPhotos] = useState([]);

  // Shuffle the photos every time the component mounts
  useEffect(() => {
    const shuffledPhotos = [...pnwPhotos];
    shuffledPhotos.sort(() => Math.random() - 0.5); // Shuffle the photos
    setFeaturedPhotos(shuffledPhotos);
  }, []);

  const featuredVideoUrl = "https://www.youtube.com/embed/oj35xAOvCdw?si=ez51AgMJihf3r3nx"; 

  // Trigger scroll animations
  useScrollAnimation();

  return (
    <div className="home-container">
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <h2>The Pacific Northwest: The best place on earth</h2>
        <p>
          Here's where you'll find us most weekends in the summer. 
          A weekend away in Washington is as good as it gets!
        </p>
        <PhotoSection photos={featuredPhotos} />
      </section>

      {/* Featured Video Section */}
      <section className="featured-video">
        <h2>Explore Japan</h2>
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
        src="/images/profile.jpg" // Add your image source here
        alt="Profile" 
        className="about-us-logo about-us-right-image" 
        />
    </div>
    </section>
    </div>
  );
};

export default PNW;
