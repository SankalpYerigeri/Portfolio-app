import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Netflix from "../../Assets/Projects/Netflix.png";

import DevTinder from "../../Assets/Projects/DevTinder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="MovieGPT"
              description="An AI-powered movie search app using React, Tailwind CSS, and Redux for state management. It integrates the Gemini API to suggest movies based on user preferences. I built it from scratch, manually configuring bundlers, and incorporated features like routing, Firebase authentication, multi-language support, YouTube trailer embedding, and responsive design. This project delivers a unique, AI-driven search experience, enhancing the way users find content."
              ghLink="https://github.com/SankalpYerigeri/NetflixGPT"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevTinder}
              isBlog={false}
              title="DevTinder"
              description="DevTinder is a full-stack web application built using ReactJS, NodeJS, ExpressJS, and MongoDB, designed to simulate a professional networking platform for developers. The application features secure authentication with JWT, efficient APIs for data handling, and seamless navigation using React-router-dom. It incorporates Redux Store for state management, Daisy UI components, and Tailwind CSS for a responsive and visually appealing user interface. The backend ensures database security by validating API data before storage, while frontend optimizations minimize API calls, delivering a smooth and efficient user experience"
              ghLink="https://github.com/SankalpYerigeri/DevTinder"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
