import { useEffect } from 'react';

const Lightbox = ({ photo, onClose }) => {
  useEffect(() => {
    if (!photo) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={photo.url} alt={photo.title} className="lightbox-img" />
        <div className="lightbox-details">
          <h2>{photo.title}</h2>
          <p>{photo.description}</p>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn var(--transition-fast) forwards;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: zoomIn var(--transition-smooth) forwards;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
        }

        .lightbox-details {
          margin-top: var(--spacing-md);
          text-align: center;
          color: var(--text-primary);
        }
        
        .lightbox-details h2 {
            font-size: 1.5rem;
            margin-bottom: var(--spacing-xs);
        }
        
        .lightbox-details p {
            color: var(--text-secondary);
        }

        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          font-size: 2rem;
          color: white;
          opacity: 0.7;
          transition: opacity var(--transition-fast);
        }

        .close-btn:hover {
          opacity: 1;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default Lightbox;
