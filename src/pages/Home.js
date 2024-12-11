import React, { useEffect, useState } from 'react';
import PhotoSection from '../components/PhotoSection';
import VideoSection from '../components/VideoSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../Home.css'; // Import styles for the page

// Move originalPhotos outside of the Home component to avoid unnecessary redefinition
const originalPhotos = [
  { src: '/images/photo1.jpg', subtitle: 'Hiking in Japan' },
  { src: '/images/photo2.jpg', subtitle: 'Japanese Mountain Hut' },
  { src: '/images/photo3.jpg', subtitle: 'Climbing Mount Yarigatake' },
  { src: '/images/photo4.jpg', subtitle: 'Floating Tori Gate in Miyajima' },
  { src: '/images/photo5.jpg', subtitle: 'Snow Monkeys' },
  { src: '/images/photo6.jpg', subtitle: 'Pea Soup Lake' },
  { src: '/images/photo7.jpg', subtitle: 'Sahale heading up Mt. Daniel' },
  { src: '/images/photo8.jpg', subtitle: 'The ENCHANTMENTS' },
  { src: '/images/photo9.jpg', subtitle: 'The ENCHANTMENTS' },
  { src: '/images/photo10.jpg', subtitle: 'Catching Razor Clams' },
  { src: '/images/photo11.jpg', subtitle: 'Drone shot' },
  { src: '/images/photo12.jpg', subtitle: 'Five tiered Pagoda' },
  { src: '/images/photo13.jpg', subtitle: 'Mount Baker Summit' },
  { src: '/images/photo14.jpg', subtitle: 'Mount Baker Summit' },
  { src: '/images/photo15.jpg', subtitle: 'Passing the Volcano on Baker' },
  { src: '/images/photo16.jpg', subtitle: 'Location kept a secret' },
  { src: '/images/photo17.jpg', subtitle: 'Beautiful Kyoto at night' },
  { src: '/images/photo18.jpg', subtitle: 'Cooling off in the North Cascades' },
  { src: '/images/photo19.jpg', subtitle: 'Perfection in the North Cascades' }
];

const Home = () => {
  // State to store the photos with their subtitles
  const [featuredPhotos, setFeaturedPhotos] = useState([]);

  // Shuffle the photos every time the component mounts
  useEffect(() => {
    const shuffledPhotos = [...originalPhotos];
    // Shuffle the photos array (you can also shuffle just the images if you prefer)
    shuffledPhotos.sort(() => Math.random() - 0.5); 
    setFeaturedPhotos(shuffledPhotos);
  }, []);

  const featuredVideoUrl = "https://www.youtube.com/embed/3Vvt5zx1STE?si=WC0URVTEDOVhaJ00";

  // Trigger scroll animations
  useScrollAnimation();

  return (
    <div className="home-container">
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <h2>Featured Photos</h2>
        <PhotoSection photos={featuredPhotos} />
      </section>

      {/* Featured Video Section */}
      <section className="featured-video">
        <h2>Featured Hiking Vlog</h2>
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

export default Home;
