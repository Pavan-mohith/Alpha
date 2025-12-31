import { useState, useEffect } from 'react';

const Intro = ({ onEnter, photos }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="intro-container">
      {/* Background Slideshow */}
      <div className="slideshow-wrapper">
        {photos.slice(0, 5).map((photo, index) => (
          <div
            key={photo.id}
            className={`slide-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${photo.url})` }}
          />
        ))}
        <div className="overlay-gradient" />
      </div>

      {/* Content */}
      <div className="intro-content">
        <h1>Moris Album</h1>
        <p>Cherished Memories</p>
        <button onClick={onEnter} className="enter-btn">
          Enter Album
        </button>
      </div>

      <style>{`
        .intro-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
        }

        .slideshow-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 2s ease-in-out, transform 10s ease-out;
          transform: scale(1.1);
        }

        .slide-image.active {
          opacity: 0.6;
          transform: scale(1);
          z-index: 1;
        }

        .overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 2;
        }

        .intro-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: white;
          animation: fadeInUp 1.5s ease-out;
        }

        .intro-content h1 {
          font-family: var(--font-heading);
          font-size: 6rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          margin-bottom: var(--spacing-sm);
          text-transform: uppercase;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .intro-content p {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 300;
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
          letter-spacing: 0.05em;
          color: #e0d8c0; /* Light gold/cream text */
        }

        .enter-btn {
          padding: 1rem 3rem;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          background: transparent;
          border: 1px solid var(--accent);
          color: var(--accent);
          transition: all 0.3s ease;
          border-radius: 2px; /* Sharper corners for classic feel */
          backdrop-filter: blur(5px);
        }

        .enter-btn:hover {
          background: var(--accent);
          color: #000;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Intro;
