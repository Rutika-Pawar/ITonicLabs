import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const AboutUs = () => {
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
      className="about-us bg-white text-gray-800 p-6 rounded-lg shadow-xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      style={backgroundImageStyle}
    >
      <div className="flex justify-end mb-4">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={handleCloseClick}
        >
          <FaTimes size={20} />
        </button>
      </div>
      <div className="bg-opacity-70 bg-white bg-opacity-70 p-6 rounded-lg shadow-xl">
        <h2 className="text-black text-3xl font-bold mb-4">Welcome to Our Company</h2>
        <p className="text-gray-700">
          At Our Company, we're dedicated to transforming education for a brighter future. Our mission is to make high-quality education accessible to all, by creating innovative solutions that address the challenges facing learners, educators, and institutions today.
        </p>
        <p className="mt-4">
          We are driven by innovation and a commitment to build a suite of solutions that will revolutionize the way people learn and teach. Our focus is on understanding the challenges facing the education system and finding sustainable solutions.
        </p>
        <p className="mt-4">
          Our team consists of experts in education, technology, and business, bringing a wealth of experience and expertise to our work. Together, we believe that education has the power to transform lives, and we're committed to making that vision a reality.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Innovation and Accessibility</li>
            <li className="text-gray-700">Quality Education for All</li>
            <li className="text-gray-700">Empowering Educators</li>
            <li className="text-gray-700">Continuous Learning</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-opacity-70 bg-white bg-opacity-70 p-10 rounded-lg shadow-xl">
              <img
                src="https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg"
                alt="Team Member 1"
                className="w-20 h-20 rounded-full mb-2 mx-auto"
              />
              <p className="text-gray-700 text-center">John Doe</p>
              <p className="text-gray-400 text-center">CEO</p>
            </div>
            <div className="bg-opacity-70 bg-white bg-opacity-70 p-10 rounded-lg shadow-xl">
              <img
                src="https://us.123rf.com/450wm/appleeyesstudio/appleeyesstudio1308/appleeyesstudio130802621/22304931-retrato-de-joven-mujer-de-negocios-en-traje-formal-aislado-en-fondo-blanco.jpg?ver=6"
                alt="Team Member 2"
                className="w-20 h-20 rounded-full mb-2 mx-auto"
              />
              <p className="text-gray-700 text-center">Jane Smith</p>
              <p className="text-gray-400 text-center">CTO</p>
            </div>
            {/* Add more team members here */}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700">
            Have questions or want to get in touch? Reach out to our team at <a href="mailto:info@itoniclabs.com">info@itoniclabs.com</a> or call us at <a href="tel:+1234567890">123-456-7890</a>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
