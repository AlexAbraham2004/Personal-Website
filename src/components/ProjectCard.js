import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const isTrainTrip = title === "TrainTrip";
  return (
    <Col size={12} sm={6} md={4} className="project-card-container">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-card-link"
      >
        <div className={`proj-imgbx ${isTrainTrip ? 'train-trip-card' : ''}`}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 style={{color:"white"}}>{title}</h4>
            <span style={{color:"white", display: "block"}}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
