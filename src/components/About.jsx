import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import  AboutUs from '../styles/AboutUs.css'; 

const AboutUscomponent = () => {
  const [showAboutUs, setShowAboutUs] = useState(true);

  const handleCloseClick = () => {
    setShowAboutUs(false);
  };

  if (!showAboutUs) {
    return null;
  }

  const backgroundImageStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <motion.div
      className="about-us"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      style={backgroundImageStyle}
    >
      <div className="close-button">
        <button
          className="close-icon"
          onClick={handleCloseClick}
        >
          <FaTimes size={20} />
        </button>
      </div>
      <div className="about-us-content">
        <h2 className="about-us-title">Welcome to Our Company</h2>
        <p className="about-us-description">
          At Our Company, we're dedicated to transforming education for a brighter future. Our mission is to make high-quality education accessible to all, by creating innovative solutions that address the challenges facing learners, educators, and institutions today.
        </p>
        <p className="about-us-description">
          We are driven by innovation and a commitment to build a suite of solutions that will revolutionize the way people learn and teach. Our focus is on understanding the challenges facing the education system and finding sustainable solutions.
        </p>
        <p className="about-us-description">
          Our team consists of experts in education, technology, and business, bringing a wealth of experience and expertise to our work. Together, we believe that education has the power to transform lives, and we're committed to making that vision a reality.
        </p>
        <div className="about-us-values">
          <h3 className="values-title">Our Values</h3>
          <ul className="values-list">
            <li className="values-item">Innovation and Accessibility</li>
            <li className="values-item">Quality Education for All</li>
            <li className="values-item">Empowering Educators</li>
            <li className="values-item">Continuous Learning</li>
          </ul>
        </div>
        <div className="about-us-team">
          <h3 className="team-title">Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg"
                alt="Team Member 1"
                className="team-member-image"
              />
              <p className="team-member-name">John Doe</p>
              <p className="team-member-role">CEO</p>
            </div>
            <div className="team-member">
              <img
                src="https://us.123rf.com/450wm/appleeyesstudio/appleeyesstudio1308/appleeyesstudio130802621/22304931-retrato-de-joven-mujer-de-negocios-en-traje-formal-aislado-en-fondo-blanco.jpg?ver=6"
                alt="Team Member 2"
                className="team-member-image"
              />
              <p className="team-member-name">Jane Smith</p>
              <p className="team-member-role">CTO</p>
            </div>
            {/* Add more team members here */}
          </div>
        </div>
        <div className="about-us-contact">
          <h3 className="contact-title">Contact Us</h3>
          <p className="contact-description">
            Have questions or want to get in touch? Reach out to our team at <a href="mailto:info@itoniclabs.com">info@itoniclabs.com</a> or call us at <a href="tel:+1234567890">123-456-7890</a>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
