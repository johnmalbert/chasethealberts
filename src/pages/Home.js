import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PhotoSection from '../components/PhotoSection';
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
  { src: '/images/photo18.jpg', subtitle: 'Wild Sky Wilderness' },
  { src: '/images/photo19.jpg', subtitle: 'Perfection in the North Cascades' },
  { src: '/images/photo20.jpg', subtitle: 'Another perfect sunset spot' },
  { src: '/images/photo21.jpg', subtitle: 'Sahale as a puppy' },
  { src: '/images/photo23.jpg', subtitle: 'Larches near Grasshopper Pass' },
  { src: '/images/photo24.jpg', subtitle: 'Camping at Sahale Arm' },
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

  // Trigger scroll animations
  useScrollAnimation();

  return (
    <div className="home-container">
      <div className="lessons-section">
        <div className="dog-images-container">
          <img src="/images/sahale.jpg" alt="Sahale" className="dog-image" />
          <p>
            <div className="centered-intro">
              <b><i>We are @chasethealberts - John, Erin and Sahale.</i></b>
            </div>
    
            Every chance that we get, we are creating memories together and capturing images along the way, 
            even if that means hauling a 3 lb telephoto lens up a Washington volcano. 
            We live in Renton, Washington and work a desk job Monday to Friday, but keep our bags packed for the weekends.
            <br />
            <br />
            Here you can find some of our favorite shots, a little more about us, find your next hike, and a few other things. 
            You can always reach out to us at chasethealberts@gmail.com, or any of the links at the bottom of the page. 
            <br />
            <div className="button-container">
                <Link to="/take-a-hike" className="styled-button">Take A Hike</Link>
                <Link to="/parks-passport" className="styled-button">Parks Passport</Link>
                <Link to="/landscapes" className="styled-button">Landscapes</Link>
            </div>
          </p>
          <img src="/images/vesper.jpg" alt="Vesper" className="dog-image" />
        </div>
      </div>
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <h2>Featured Photos</h2>
        <h5>Tap to see the subtitle with details/location!</h5>
        <PhotoSection photos={featuredPhotos} />
      </section>

      {/* Featured Video Section */}
      <section className="featured-video">
        <h2>Featured Hiking Vlog</h2>
        <iframe width="500" height="300" 
          src="https://www.youtube.com/embed/Nq9J11NV5GM?si=TliVfeH7VP7mjR-8" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </section>

    {/* About Us Section */}
    <section className="about-us">
      <h2>About Us</h2>
      <div className="about-us-content">
        <p>
          We have found that sometimes the only way to recharge is to step away and unplug in the mountains, 
          and these images attempt to capture that feeling. If you'd like to request full-resolution images, 
          send an email to chasethealberts@gmail.com!
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
