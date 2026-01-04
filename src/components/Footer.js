import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-start">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alex-abraham-a981aa261"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/AlexAbraham2004"><img src={navIcon2} alt="" /></a>
              <a href="https://drive.google.com/file/d/1mDbIdeG8OoJIrpq5yW3xNN78jaxea0OT/view?usp=sharing"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
