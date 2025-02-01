import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import auctionArchitects from "../assets/img/auctionArchitects.png"
import nbaFantasy from "../assets/img/nbaFantasy.png"
import trainTrip from "../assets/img/trainTrip.png"
import strideSense from "../assets/img/stridesense.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css'

export const Projects = () => {
  // ✅ Categorized Personal Projects with GitHub Links
  const personalProjects = [
    { title: "AuctionArchitects", description: "Design & Development", imgUrl: auctionArchitects, link: "https://github.com/Shahed4/AuctionArchitects" },
    { title: "NBA-Fantasy-App", description: "Design & Development", imgUrl: nbaFantasy, link: "https://github.com/AlexAbraham2004/NBA-Fantasy-App" },
    { title: "TrainTrip", description: "Design & Development", imgUrl: trainTrip, link: "https://github.com/AlexAbraham2004/TrainTrip" },
  ];
  

  // ✅ Categorized Hackathon Projects with GitHub Links
const hackathonProjects = [
  { title: "GreenScan", description: "Hackathon Project", imgUrl: projImg1, link: "https://github.com/Shahed4/GreenScan"},
  { title: "TheraCam", description: "Hackathon Project", imgUrl: projImg2, link: "https://github.com/Shahed4/TheraCam" },
  { title: "MaterniSense", description: "Hackathon Project", imgUrl: projImg3, link: "https://github.com/Shahed4/Maternisense" },
  { title: "StrideSense", description: "Hackathon Project", imgUrl: strideSense, link: "https://drive.google.com/file/d/1soKk125m047qiNw6eayR74uw46hKkulq/view?usp=sharing" }
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Below are some of my personal and hackathon projects that showcase my skills in design and development.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Coming Soon</Nav.Link> {/* Blank Middle Tab for UI/UX Flow */}
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Hackathon Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      
                      {/* ✅ Personal Projects Tab */}
                      <Tab.Pane eventKey="first">
                      <Row>
                      {personalProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                      </Row>

                      </Tab.Pane>

                      {/* ✅ Blank Middle Tab for UI/UX Flow */}
                      <Tab.Pane eventKey="second">
                        <p style={{ textAlign: "center", fontStyle: "italic", color: "#b8b8b8" }}>
                          More projects coming soon...
                        </p>
                      </Tab.Pane>

                      {/* ✅ Hackathon Projects Tab */}
                      <Tab.Pane eventKey="third">
                      <Row>
                      {hackathonProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                      </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
