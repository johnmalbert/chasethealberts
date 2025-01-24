import React, { useEffect, useState } from 'react';
import PhotoSection from '../components/PhotoSection';
import VideoSection from '../components/VideoSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../Home.css'; // Reuse the same styles as the home page

// Define the photos for the Japan page with their subtitles
const japanPhotos = [
  { src: '/images/japan/photo1.jpg', subtitle: 'Sights from Kumano Kodo Pilgramage' },
  { src: '/images/japan/photo2.jpg', subtitle: 'Shibuya Square' },
  { src: '/images/japan/photo3.jpg', subtitle: 'Overlooking Miyajima' },
  { src: '/images/japan/photo4.jpg', subtitle: 'Bamboo Forest in Kyoto' },
  { src: '/images/japan/photo5.jpg', subtitle: 'Nara Temple' },
  { src: '/images/japan/photo6.jpg', subtitle: 'Our mountain hut, Yarigatake' },
  { src: '/images/japan/photo7.jpg', subtitle: 'View from Yarigatake' },
  { src: '/images/japan/photo8.jpg', subtitle: 'Yarigatake Summit' },
  { src: '/images/japan/photo9.jpg', subtitle: 'Bear bell along the Kamikochi trails' },
  { src: '/images/japan/photo10.jpg', subtitle: 'Filling up on the way to Yarigatake' },
  { src: '/images/japan/photo11.jpg', subtitle: 'No caption needed' },
  { src: '/images/japan/photo12.jpg', subtitle: 'Kapabashi Bridge' },
  { src: '/images/japan/photo13.jpg', subtitle: 'Looking up into the Northern Japanese Alps' },
  { src: '/images/japan/photo14.jpg', subtitle: 'Views along the Azusa River' },
  { src: '/images/japan/photo15.jpg', subtitle: 'Floating Torii Gate' }
];

const Japan = () => {
  // State to store the photos with their subtitles
  const [featuredPhotos, setFeaturedPhotos] = useState([]);

  // Shuffle the photos every time the component mounts
  useEffect(() => {
    const shuffledPhotos = [...japanPhotos];
    shuffledPhotos.sort(() => Math.random() - 0.5); // Shuffle the photos
    setFeaturedPhotos(shuffledPhotos);
  }, []);

  const featuredVideoUrl = "https://www.youtube.com/embed/G62wWhGiJJs?si=ZJV7s6hKbJtHSvtL"; // Replace with Japan-specific video if desired

  // Trigger scroll animations
  useScrollAnimation();

  return (
    <div className="home-container">
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <h2>Photos from Japan</h2>
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

export default Japan;
