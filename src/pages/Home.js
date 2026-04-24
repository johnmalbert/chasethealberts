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
  { src: '/images/photo26.jpg', subtitle: 'Photo 26' },
  { src: '/images/photo27.jpg', subtitle: 'Photo 27' },
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

  // Load TikTok embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Chase the Alberts</h1>
          <p className="hero-subtitle">Adventure, Photography & Outdoor Stories</p>
          <div className="hero-buttons">
            <Link to="/take-a-hike" className="hero-button primary">Explore Hikes</Link>
            <Link to="/parks-passport" className="hero-button secondary">Parks Passport</Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p className="story-intro">We are @chasethealberts - John, Erin and Sahale</p>
        
        <div className="story-cards">
          <div className="story-card">
            <img src="/images/hikes/ruth1.jpg" alt="Erin" className="story-image" />
            <h3>Erin</h3>
            <p className="story-subtitle">The Planner & Photographer</p>
            <p>Behind every great adventure is meticulous planning. Erin maps the routes, books the accommodations, and captures each moment with a talented eye. </p>
          </div>

          <div className="story-card">
            <img src="/images/japan/photo8.jpg" alt="John" className="story-image" />
            <h3>John</h3>
            <p className="story-subtitle">The Driver & Gear Hauler</p>
            <p>John's primary job is driving us to the trailhead and carrying the 3 lb telephoto lens and other heavy equipment up mountains. He also occasionally appears in photos when someone needs to point at something scenic. John also loves a good side mission from camp.</p>
          </div>

          <div className="story-card">
            <img src="/images/sahale.jpg" alt="Sahale" className="story-image" />
            <h3>Sahale</h3>
            <p className="story-subtitle">Our Adventure Companion</p>
            <p>Always ready for the next trail, Sahale has been our hiking partner, crazy banshee, foot warmer in the sleeping bag, and photography subject since we first came home with her. A true mountain dog at heart.</p>
          </div>

          <div className="story-card">
            <iframe src="https://www.instagram.com/chasethealberts/embed" width="100%" height="300" title="Instagram feed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          </div>

          <div className="story-card">
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/utD60GayXJ8?si=NbsI61ESTjV0V4vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="story-card">
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@chasethealberts" data-unique-id="chasethealberts" data-embed-type="creator">
              <section>
                <a target="_blank" href="https://www.tiktok.com/@chasethealberts?refer=creator_embed" rel="noopener noreferrer">@chasethealberts</a>
              </section>
            </blockquote>
          </div>
        </div>

        <p className="story-description">
          Every chance we get, we're creating memories together and capturing images along the way—even if that means hauling a 3 lb telephoto lens up a Washington volcano. 
          We live in Renton, Washington and work desk jobs Monday to Friday, but keep our bags packed for weekend adventures.
        </p>
      </section>

      <div className="lessons-section">
        <div className="dog-images-container">
          <img src="/images/sahale.jpg" alt="Sahale" className="dog-image" />
          <p>
            <div className="centered-intro">
              <b><i>Here you can find some of our favorite shots, a little more about us, find your next hike, and a few other things.</i></b>
              <br></br>
              You can always reach out to us at chasethealberts@gmail.com, or any of the links at the bottom of the page. 
              <br />
              <div className="button-container">
                  <Link to="/our-dogs" className="hero-button secondary">Our Dogs</Link>
                  <Link to="/landscapes" className="hero-button secondary">Landscapes</Link>
                  <Link to="/japan" className="hero-button secondary">Japan</Link>
                  <Link to="/iceland" className="hero-button secondary">Iceland</Link>
                  <Link to="/blog" className="hero-button secondary">Latest Blog</Link>
              </div>
            </div>
          </p>
          <img src="/images/vesper.jpg" alt="Vesper" className="dog-image" />
        </div>
      </div>
      
      {/* Featured Photos Section */}
      <section className="featured-photos">
        <div className="featured-photos-header">
          <h2>Featured Photos</h2>
          <p className="featured-intro">A collection of our favorite moments across the Pacific Northwest, Japan, and beyond. Click on any photo to see the location and details.</p>
        </div>
        <PhotoSection photos={featuredPhotos} />
      </section>

    {/* About Us Section */}
    <section className="about-us">
      <h2>Why We Do This</h2>
      <div className="about-us-content">
        <p>
          We have found that sometimes the only way to recharge is to step away and unplug in the mountains. 
          These images attempt to capture that feeling—the peace of a misty morning, the thrill of a summit, 
          the connection we share with these incredible places and each other. 
          <br/><br/>
          If you'd like to request full-resolution images or collaborate, send an email to chasethealberts@gmail.com!
        </p>
        <img 
          src="/images/profile.jpg"
          alt="Profile" 
          className="about-us-logo about-us-right-image" 
        />
      </div>
    </section>
    </div>
  );
};

export default Home;
