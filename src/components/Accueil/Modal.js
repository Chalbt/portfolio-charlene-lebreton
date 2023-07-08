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
          <p>Position: {project.statut}</p>
          <p>Responsabilities: {project.missions}</p>
          <p>Challenges faced : {project.difficultes}</p>
          <p>Skills :</p>
          <ul>
            {project.competences.map((competence, index) => (
              <li key={index}>{competence}</li>
            ))}
          </ul>
          <a href={project.lien} target="_blank" rel="noopener noreferrer">Explore the project</a>
        </div>
      </div>
    );
  }
  
  export default Modal;