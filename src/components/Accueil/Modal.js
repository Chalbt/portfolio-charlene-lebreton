import "../../datas/datas.json"

function Modal({ project, onClose, modalOpen }) {
  const handleCloseClick = () => {
    onClose();
  };

    return (
      <div className={`modal-overlay ${modalOpen ? 'modal-open' : ''}`}>
        <div className="close-icon">
        <span onClick={handleCloseClick}>&times;</span>
        </div>
        <div className="modal-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Statut: {project.statut}</p>
          <p>Missions: {project.missions}</p>
          <p>Diificultés rencontrés : {project.difficultes}</p>
          <p>Compétences :</p>
          <ul>
            {project.competences.map((competence, index) => (
              <li key={index}>{competence}</li>
            ))}
          </ul>
          <a href={project.lien} target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
      </div>
    );
  }
  
  export default Modal;