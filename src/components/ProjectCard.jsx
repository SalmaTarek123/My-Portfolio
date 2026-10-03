import React from 'react';
import './components.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <button
      className="book"
      onClick={onClick}
      style={{ '--rot': '0deg', '--off': '0px' }}
      aria-label={`Open ${project.title}`}
    >
      <div
        className="book-cover"
        style={{ '--book-color': project.color }}
      >
        <div className="book-spine"></div>
        <div className="book-index">{project.tagLabel.toUpperCase()}</div>
        <div className="book-title">{project.title}</div>
        <div className="book-tagline">{project.shortDesc}</div>
        <div className="book-open-hint">Click to open →</div>
      </div>
    </button>
  );
};

export default ProjectCard;