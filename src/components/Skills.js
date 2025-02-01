import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import LogoWall from './LogoWall';

import react from "../assets/img/react.svg";
import nextjs from "../assets/img/next-js.svg";
import materialui from "../assets/img/material-ui-1.svg";
import bootstrap from "../assets/img/bootstrap-5-1.svg";
import nodejs from "../assets/img/nodejs-2.svg";
import express from "../assets/img/express-109.svg";
import fastapi from "../assets/img/fastapi-1.svg";
import flask from "../assets/img/flask.svg";
import firebase from "../assets/img/firebase-1.svg";
import mongodb from "../assets/img/mongodb-icon-2.svg";
import postgresql from "../assets/img/postgresql.svg";
import tensorflow from "../assets/img/tensorflow-2.svg";
import microsoft from "../assets/img/microsoft-5.svg";







export const Skills = () => {
  const logoImgs = [
    { imgUrl: react, altText: "React Bits Logo" }, 
    { imgUrl: nextjs, altText: "React Bits Logo" },
    { imgUrl: materialui, altText: "React Bits Logo" },
    { imgUrl: bootstrap, altText: "React Bits Logo" },
    { imgUrl: nodejs, altText: "React Bits Logo" },
    { imgUrl: express, altText: "React Bits Logo" },
    { imgUrl: fastapi, altText: "React Bits Logo" },
    { imgUrl: flask, altText: "React Bits Logo" },
    { imgUrl: firebase, altText: "React Bits Logo" },
    { imgUrl: mongodb, altText: "React Bits Logo" },
    { imgUrl: postgresql, altText: "React Bits Logo" },
    { imgUrl: tensorflow, altText: "React Bits Logo" },
    { imgUrl: microsoft, altText: "React Bits Logo" }
  ];
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          As a passionate and driven software engineer, I continuously strive to expand my technical expertise and problem-solving skills. My skillset spans multiple programming languages, frameworks, and tools that enable me to tackle complex challenges and create innovative solutions.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                        <h2>
                          <br /> Frameworks:{" "}
                          <div style={{height: '600px', width: '100%', position: 'relative'}}>
                          <LogoWall
                            items={logoImgs}
                            direction='horizontal'
                            pauseOnHover={true}
                            size='clamp(8rem, 1rem + 20vmin, 25rem)'
                            duration='20s'
                            bgColor='#060606'
                            bgAccentColor='#111111'
                          />  
                          </div>
                        </h2>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
