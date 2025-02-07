import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import MyGlobeComponent from "./globe";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Mobile Developer", "AI/ML Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>


                  <h1>
                    {`Hi! I'm Alex Abraham `} 
                    <span className="txt-rotate" dataperiod="1000" data-rotate='["Web Developer", "Mobile Developer", "AI/ML Developer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Hello! My name is Alex Abraham, and I am a junior at CUNY City College of New York, majoring in Computer Science at the Grove School of Engineering. I am passionate about full-stack development, machine learning, and data science, continuously expanding my technical expertise through coursework and hands-on projects. I am actively seeking internship opportunities and networking with professionals in the field. I am also a collegiate Division III Volleyball and Track athlete, an engaged member of Beaver’s Code, and the Society of Asian Scientists and Engineers (SASE). Currently, I am working on machine learning-driven applications and plan to further explore AI and software engineering through official coursework and research.                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
              <div className="globe-container">
                  <MyGlobeComponent />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
