import { useState, useEffect } from 'react';

const Slideshow = ({ photos, onViewGrid }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="slideshow-container">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${photo.url})` }}
          />

          <div className="slide-content">
            <h2>{photo.description}</h2>
          </div>
        </div>
      ))}

      <button className="view-grid-btn" onClick={onViewGrid}>
        View All Photos
      </button>

      <style>{`
        .slideshow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 100;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          pointer-events: none;
        }

        .slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .slide-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transform: scale(1);
        }

        .slide.active .slide-img {
          animation: kenBurns 6s ease-out forwards;
        }

        .slide-content {
          position: absolute;
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: white;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
          width: 90%;
          opacity: 0;
          transition: opacity 1s 0.6s;
        }

        .slide.active .slide-content {
          opacity: 1;
        }

        .slide-content h2 {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-style: italic;
        }

        .view-grid-btn {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          padding: 12px 34px;
          font-family: var(--font-heading);
          background: rgba(0,0,0,0.35);
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 2px;
          cursor: pointer;
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
          z-index: 200;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .view-grid-btn:hover {
          background: var(--accent);
          color: #2c2724;
        }

        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
      `}</style>
    </div>
  );
};

export default Slideshow;
