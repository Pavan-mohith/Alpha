import { useState } from 'react';
import PhotoGrid from './components/PhotoGrid';
import Lightbox from './components/Lightbox';
import Intro from './components/Intro';
import Slideshow from './components/Slideshow';

// Import local images
import img1 from './images/image.png';
import img2 from './images/image copy.png';
import img3 from './images/image copy 2.png';
import img4 from './images/image copy 3.png';
import img5 from './images/image copy 4.png';
import img6 from './images/image copy 5.png';
import img7 from './images/image copy 6.png';
import img8 from './images/image copy 7.png';
import img9 from './images/image copy 8.png';
import img10 from './images/image copy 9.png';

// Local image data (NO titles, ONLY big descriptions)
const PHOTOS = [
  { id: 1, url: img1, description: 'BABY TOTO' },
  { id: 2, url: img2, description: 'BEAUTIFUL BUNNY' },
  { id: 3, url: img3, description: 'PEARL EYES' },
  { id: 4, url: img4, description: 'SANTA AMBER' },
  { id: 5, url: img5, description: 'SWEET MEMORIES' },
  { id: 6, url: img6, description: 'US HEHE' },
  { id: 7, url: img7, description: 'AMONG US SUS BUNNY' },
  { id: 8, url: img8, description: 'CUTE LIL BUG' },
  { id: 9, url: img9, description: 'SANTA AMBER' },
  { id: 10, url: img10, description: 'STALKING BUNNY' },
];

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [viewMode, setViewMode] = useState('intro');

  return (
    <div className="app-container">
      {viewMode === 'intro' && (
        <Intro
          photos={PHOTOS}
          onEnter={() => setViewMode('slideshow')}
        />
      )}

      {viewMode === 'slideshow' && (
        <Slideshow
          photos={PHOTOS}
          onViewGrid={() => setViewMode('grid')}
        />
      )}

      {viewMode === 'grid' && (
        <div className="main-content">
          <header className="app-header">
            <h1>Moris Album</h1>
            <p>Cherished Memories</p>
            <div className="decoration-line">♥</div>
            <button
              className="back-btn"
              onClick={() => setViewMode('slideshow')}
            >
              Play Slideshow
            </button>
          </header>

          <main>
            <PhotoGrid
              photos={PHOTOS}
              onPhotoClick={setSelectedPhoto}
            />
          </main>
        </div>
      )}

      <Lightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      <style>{`
        .main-content {
          animation: fadeInApp 1.5s ease-out;
        }

        .back-btn {
          margin-top: 1rem;
          font-size: 0.9rem;
          text-decoration: underline;
          opacity: 0.7;
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .back-btn:hover {
          opacity: 1;
        }

        .app-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: var(--spacing-lg);
          min-height: 100vh;
        }

        .app-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
          padding: 4rem 0;
          animation: fadeDown 1s var(--transition-smooth);
        }

        .app-header h1 {
          font-size: 5rem;
          font-weight: 400;
          margin-bottom: 10px;
          border-bottom: 1px solid var(--accent);
          display: inline-block;
          padding-bottom: 10px;
        }

        .app-header p {
          font-style: italic;
          font-size: 1.8rem;
        }

        .decoration-line {
          font-size: 2rem;
          margin: 10px 0;
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
