import { useState } from 'react';

const PhotoCard = ({ photo, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            className="photo-card"
            onClick={() => onClick(photo)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick(photo)}
        >
            <div className="image-wrapper">
                <img
                    src={photo.url}
                    alt={photo.title}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`photo-img ${isLoaded ? 'loaded' : ''}`}
                />
                <div className="overlay">
                    <h3 className="photo-title">{photo.title}</h3>
                    <p className="photo-desc">{photo.description}</p>
                </div>
            </div>

            <style>{`
        .photo-card {
          margin-bottom: var(--spacing-md);
          break-inside: avoid;
          cursor: zoom-in;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          transition: transform var(--transition-fast);
          background-color: var(--bg-secondary);
        }

        .photo-card:hover {
          transform: scale(1.02);
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .photo-img {
          width: 100%;
          height: auto;
          display: block;
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .photo-img.loaded {
          opacity: 1;
        }

        .photo-card:hover .photo-img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--spacing-md);
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--transition-fast);
        }

        .photo-card:hover .overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .photo-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .photo-desc {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
        }
      `}</style>
        </div>
    );
};

export default PhotoCard;
