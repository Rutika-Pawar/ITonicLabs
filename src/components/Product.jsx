import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import work1 from '../assets/work 1.jpeg';
import work2 from '../assets/work 2.webp';
import work3 from '../assets/work 3.avif';
import work4 from '../assets/work 4.jpg';
import work5 from '../assets/work 5.jpeg';
import work6 from '../assets/work 6.jpg';
import Product from '../styles/Product.css';

const Title= ({ title, des }) => {
  return (
    <div className="title">
      <h3 className="title-text">
        {title}
      </h3>
      <h1 className="title-description">{des}</h1>
    </div>
  );
};

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="projects-card">
      <div className="project-image">
        <img
          className="project-image-inner"
          src={src}
          alt="Project"
        />
      </div>
      <div className="project-details">
        <div className="project-title">
          <div className="project-title-inner">
            <h3 className="project-title-text">
              {title}
            </h3>
            <div className="project-icons">
              <span className="project-icon">
                <BsGithub />
              </span>
              <span className="project-icon">
                <FaGlobe />
              </span>
            </div>
          </div>
        </div>
        <p className="project-description">
          {des}
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="works" className="projects-section">
      <div className="projects-title">
        <Title title="Unveil brilliance in every detail as you explore our products up close." des=" OUR PRODUCTS" />
      </div>
      <div className="projects-grid">
        <ProjectsCard
          title= "Student Performance Dashboard"
          des= "Provide teachers with insights into student performance using a dashboard that displays grades, attendance, and progress over time."
          src= {work1}
        />
        <ProjectsCard
          title="Learning Analytics Dashboard"
          des="Enable administrators to track learning metrics, identify trends, and make data-driven decisions for curriculum improvements."
          src={work2}
        />
        <ProjectsCard
          title="Parent-Teacher Communication Portal"
          des="Build a portal where parents can access real-time updates about their child's academic progress, activities, and school announcements."
          src={work3}
        />
        <ProjectsCard
          title= "Online Course Management Dashboard"
          des="Develop a comprehensive dashboard for instructors to manage course materials, assignments, discussions, and student interactions."
          src={work4}
        />
        <ProjectsCard
          title="Interactive Learning Analytics"
          des="Create an engaging dashboard that students can use to track their learning progress, set goals, and receive personalized recommendations."
          src={work5}
        />
        <ProjectsCard
          title= "Virtual Classroom Dashboard"
          des="Design a dashboard for virtual classrooms, allowing educators to manage video sessions, quizzes, breakout rooms, and attendance."
          src={work6}
        />
      </div>
    </section>
  );
};

export default Projects;
