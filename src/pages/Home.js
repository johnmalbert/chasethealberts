import React, { useEffect, useState } from 'react';
import PhotoSection from '../components/PhotoSection';
import VideoSection from '../components/VideoSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../Home.css'; // Import styles for the page

// Move originalPhotos outside of the Home component to avoid unnecessary redefinition
const originalPhotos = [
  '/images/photo1.jpg', 
  '/images/photo2.jpg', 
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
  '/images/photo7.jpg',
  '/images/photo8.jpg',
  '/images/photo9.jpg',
  '/images/photo10.jpg',
  '/images/photo11.jpg',
  '/images/photo12.jpg',
  '/images/photo13.jpg',
  '/images/photo14.jpg',
  '/images/photo15.jpg',
  '/images/photo16.jpg',
  '/images/photo17.jpg',
  '/images/photo18.jpg',
  '/images/photo19.jpg'
];

const Home = () => {
  // Shuffle function to randomize the photo order
  const shuffleArray = (array) => {
    let shuffled = array.slice(); // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // State to store the shuffled photos
  const [featuredPhotos, setFeaturedPhotos] = useState([]);

  // Shuffle the photos every time the component mounts
  useEffect(() => {
    const shuffledPhotos = shuffleArray(originalPhotos);
    console.log(shuffledPhotos); // Debug: Check if images are shuffled properly
    setFeaturedPhotos(shuffledPhotos);
  }, []);

  const featuredVideoUrl = "https://www.youtube.com/embed/3Vvt5zx1STE?si=WC0URVTEDOVhaJ00";

  // Trigger scroll animations
  useScrollAnimation();
  return (
    <div className="home-container">
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <PhotoSection photos={featuredPhotos} />
      </section>

      {/* Featured Video Section */}
      <section className="featured-video">
        <h2>Watch Our Journey</h2>
        <VideoSection videoUrl={featuredVideoUrl} />
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We're the Alberts, a couple passionate about travel, backpacking, and mountaineering.
          We have found that sometimes the only way to recharge is to step away and unplug in the mountains.
          Vesper, our first adventure dog, came along on just about every trip. Sahale now joins us (as long as it's not too crazy)!
        </p>
      </section>
    </div>
  );
};

export default Home;