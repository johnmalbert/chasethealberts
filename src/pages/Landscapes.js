import React from 'react';
import PhotoSection from '../components/PhotoSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../Home.css'; // Reuse the same styles as the home page

const landscapePhotos = [
  { src: '/images/landscapes/photo1.jpg', subtitle: 'Overlooking the Columbia River Basin' },
  { src: '/images/landscapes/photo2.jpg', subtitle: 'Navaho Peak' },
  { src: '/images/landscapes/photo3.jpg', subtitle: 'Sunset over the Enchantments' },
  { src: '/images/landscapes/photo4.jpg', subtitle: 'Eagle Lake' },
  { src: '/images/landscapes/photo5.jpg', subtitle: 'An Enchanting Larch' },
  { src: '/images/landscapes/photo6.jpg', subtitle: 'The Enchantments' },
  { src: '/images/landscapes/photo7.jpg', subtitle: 'Pea Soup Lake from Mount Daniel' },
  { src: '/images/landscapes/photo8.jpg', subtitle: 'Spade and Venus Lakes' },
  { src: '/images/landscapes/photo9.jpg', subtitle: 'The Enchantments in the fall' },
  { src: '/images/landscapes/photo10.jpg', subtitle: 'The Enchantments in the fall' },
  { src: '/images/landscapes/photo11.jpg', subtitle: 'Canyonlands National Park' },
  { src: '/images/landscapes/photo12.jpg', subtitle: 'Mount Baker' },
  { src: '/images/landscapes/photo13.jpg', subtitle: 'Yellowstone Geyser' },
  { src: '/images/landscapes/photo14.jpg', subtitle: 'Descending Mt. Baker' },
  { src: '/images/landscapes/photo15.jpg', subtitle: 'Looking down Mt. Baker' },
  { src: '/images/landscapes/photo16.jpg', subtitle: 'High Camp below Glacier Peak' },
  { src: '/images/landscapes/photo17.jpg', subtitle: 'Unnamed Lake in Glacier Peak Wilderness' },
  { src: '/images/landscapes/photo18.jpg', subtitle: 'Yellow Aster Butte tarns' },
  { src: '/images/landscapes/photo19.jpg', subtitle: 'Japanese Alps in the fall' },
  { src: '/images/landscapes/photo20.jpg', subtitle: 'Death Valley sand dunes'}
];

const Landscapes = () => {
  // Trigger scroll animations
  useScrollAnimation();

  return (
    <div className="home-container">
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <PhotoSection photos={landscapePhotos} />
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

export default Landscapes;
