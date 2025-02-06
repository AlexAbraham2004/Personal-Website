import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


import auctionArchitects from "../assets/img/auctionArchitects.png"
import nbaFantasy from "../assets/img/nbaFantasy.png"
import trainTrip from "../assets/img/trainTrip.png"
import strideSense from "../assets/img/stridesense.png"
import theraCam from "../assets/img/theracam.png"
import maternisense from "../assets/img/maternisense.png"
import greenscan from "../assets/img/greenscan.png"




import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css'

export const Projects = () => {
  // ✅ Categorized Personal Projects with GitHub Links
  const personalProjects = [
    { title: "AuctionArchitects", description: "A full-stack e-commerce platform with real-time bidding, role-based user functionalities, and an AI-powered chatbot for seamless car buying and selling.", imgUrl: auctionArchitects, link: "https://github.com/Shahed4/AuctionArchitects" },
    { title: "NBA-Fantasy-App", description: "A web application that fetches real-time NBA stats, player data, and schedules, allowing users to track and manage their fantasy basketball picks.", imgUrl: nbaFantasy, link: "https://github.com/AlexAbraham2004/NBA-Fantasy-App" },
    { title: "TrainTrip", description: "A transit tracking application that utilizes GTFS data and APIs to provide real-time LIRR updates, ensuring commuters have up-to-date trip information.", imgUrl: trainTrip, link: "https://github.com/AlexAbraham2004/TrainTrip" },
  ];
  

  // ✅ Categorized Hackathon Projects with GitHub Links
const hackathonProjects = [
  { title: "GreenScan", description: "An AI-powered sustainability tool that identifies household items via live camera feeds and suggests creative reuse options to reduce waste.", imgUrl: greenscan, link: "https://github.com/Shahed4/GreenScan"},
  { title: "TheraCam", description: "A real-time fitness tool utilizing OpenPose and machine learning to provide in-home posture correction and guided exercise feedback for elderly users.", imgUrl: theraCam, link: "https://github.com/Shahed4/TheraCam" },
  { title: "MaterniSense", description: "A maternal health monitoring system integrating machine learning and hardware sensors (EMG, IMU, ECG) to provide real-time fetal health predictions and insights.", imgUrl: maternisense, link: "https://github.com/Shahed4/Maternisense" },
  { title: "StrideSense", description: "A smart insole system using load cell sensors and targeted vibrations to improve circulation and mitigate the effects of plantar fasciitis in users.", imgUrl: strideSense, link: "https://drive.google.com/file/d/1soKk125m047qiNw6eayR74uw46hKkulq/view?usp=sharing" }
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
