import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos, onPhotoClick }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={photo.id} style={{ animationDelay: `${index * 0.08}s` }} className="fade-in-item">
          <PhotoCard
            photo={photo}
            onClick={onPhotoClick}
          />
        </div>
      ))}

      <style>{`
        .fade-in-item {
            opacity: 0;
            animation: staggerFadeIn 0.8s ease-out forwards;
            break-inside: avoid;
            margin-bottom: var(--spacing-md);
        }

        @keyframes staggerFadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .photo-grid {
          column-count: 1;
          column-gap: var(--spacing-md);
          padding: 0 var(--spacing-sm);
        }

        @media (min-width: 600px) {
          .photo-grid {
            column-count: 2;
          }
        }

        @media (min-width: 900px) {
          .photo-grid {
            column-count: 3;
            column-gap: var(--spacing-lg);
          }
        }
        
        @media (min-width: 1400px) {
            .photo-grid {
              column-count: 4;
            }
        }
      `}</style>
    </div>
  );
};

export default PhotoGrid;
