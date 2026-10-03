import React, { useState } from 'react';
import './components.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;
  const currentImage = hasImages ? project.images[currentImageIndex] : null;

  const goToNextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const goToPrevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-body">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span
              className="tag"
              style={{
                backgroundColor: project.color + '22',
                color: project.color,
                border: `1px solid ${project.color}44`,
              }}
            >
              {project.tagLabel}
            </span>
            <h2 style={{ color: project.color, marginTop: '1rem', marginBottom: '0.5rem' }}>
              {project.title}
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>{project.shortDesc}</p>
          </div>

          {/* Main Description */}
          <div className="modal-description" style={{ marginBottom: '1.5rem' }}>
            <p>{project.description}</p>
          </div>

          {/* Problem */}
          <h3 style={{ color: project.color, marginTop: '1.5rem' }}>The Problem</h3>
          <p className="modal-description">{project.problem}</p>

          {/* Solution */}
          <h3 style={{ color: project.color, marginTop: '1.5rem' }}>The Approach</h3>
          <p className="modal-description">{project.solution}</p>

          {/* Results */}
          <h3 style={{ color: project.color, marginTop: '1.5rem' }}>Key Results</h3>
          <ul className="modal-description">
            {project.results.map((result, idx) => (
              <li key={idx} style={{ marginBottom: '0.75rem' }}>
                {result}
              </li>
            ))}
          </ul>

          {/* Images Gallery */}
          {hasImages && (
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ color: project.color, marginBottom: '1rem' }}>Visualizations</h3>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <figure style={{
                  margin: 0,
                  border: `2px solid ${project.color}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  maxWidth: '100%',
                }}>
                  <img
                    src={currentImage.src}
                    alt={currentImage.caption}
                    style={{
                      width: '100%',
                      maxHeight: '300px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <figcaption style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: project.color + '11',
                    color: '#6b7280',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                  }}>
                    {currentImage.caption}
                  </figcaption>
                </figure>
              </div>

              {/* Image Navigation */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}>
                <button
                  onClick={goToPrevImage}
                  disabled={project.images.length <= 1}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: project.color + '22',
                    color: project.color,
                    border: 'none',
                    borderRadius: '8px',
                    cursor: project.images.length <= 1 ? 'default' : 'pointer',
                    opacity: project.images.length <= 1 ? 0.3 : 1,
                    fontWeight: '600',
                  }}
                >
                  ← Previous
                </button>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
                  {currentImageIndex + 1} / {project.images.length}
                </span>
                <button
                  onClick={goToNextImage}
                  disabled={project.images.length <= 1}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: project.color + '22',
                    color: project.color,
                    border: 'none',
                    borderRadius: '8px',
                    cursor: project.images.length <= 1 ? 'default' : 'pointer',
                    opacity: project.images.length <= 1 ? 0.3 : 1,
                    fontWeight: '600',
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Tags */}
          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ color: project.color, marginBottom: '0.75rem' }}>Technologies</h3>
            <div className="modal-tags">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="small-tag"
                  style={{
                    backgroundColor: project.color + '22',
                    color: project.color,
                    border: `1px solid ${project.color}44`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;