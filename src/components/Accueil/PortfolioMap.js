import React, { useState } from 'react';
import projectsData from '../../datas/datas.json';
import Booki from "../../assets/booki.png";
import Sophie from "../../assets/sophie-bluel.png";
import Nina from "../../assets/nina-carducci.png";
import Kasa from "../../assets/kasa.png";
import Grimoire from "../../assets/grimmoire.png"
import "../../styles/Portfoliomap.css";
import Modal from './Modal';

const images = [Booki, Sophie, Nina, Kasa, Grimoire];

function PortfolioMap() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleModalOpen = (project) => {
    setModalOpen(true);
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="portfolio-map">
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className="project"
          onMouseEnter={() => handleMouseEnter(project)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleModalOpen(project)}
        >
          <img className="project-image" src={images[index]} alt={project.title} />

          {hoveredProject === project && (
            <div className="project-details">
              <h4>{project.title}</h4>
            </div>
          )}
        </div>
      ))}
      {modalOpen && selectedProject && (
            <div className="modal-overlay">
                <Modal project={selectedProject} onClose={handleModalClose} modalOpen={modalOpen} />
            </div>
        )}

    </div>
  );
}

export default PortfolioMap;