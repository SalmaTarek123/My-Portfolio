import React, { useState } from 'react';
import './components.css';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../assets/data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Work</h2>
          <p>
            Each project below is a complete case study. Click any one to dive into
            the problem, approach, and results.
          </p>
        </div>

        <div className="bookshelf">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;