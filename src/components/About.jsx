import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPen, FaTimes } from 'react-icons/fa';

const AboutUs = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
    setSubmitted(false);
    setShowAboutUs(false);
  };

  if (!showAboutUs) {
    return null;
  }
  const backgroundImageStyle = {
    backgroundImage: `url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <motion.div
      className="about-us bg-white p-6 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex justify-end mb-4">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={handleCloseClick}
        >
          <FaTimes size={20} />
        </button>
      </div>
      <h2 className="text-[#00df9a] text-2xl font-bold mb-4">Welcome to Our Company</h2>
      <p className="text-gray-700">
        Where we're committed to transforming the education system. Our mission is to make high-quality education accessible to all, by creating innovative solutions that address the challenges facing learners, educators, and institutions today.
      </p>
      <p className="mt-4">
        We are a dynamic company that is focused on building a brighter future through our innovative products and services. While we currently offer a single product, our long-term vision is to build a suite of solutions that will revolutionize the way people learn and teach.
      </p>
      <p className="mt-4">
        At the core of our approach is a deep understanding of the challenges facing the education system, and a commitment to finding innovative, sustainable solutions. Our team is made up of experts in education, technology, and business, who bring a wealth of experience and expertise to our work.
      </p>
      <p className="mt-4">
        We believe that education has the power to transform lives, and we're committed to making that vision a reality. Join us on our journey to transform the education system, one innovation at a time.
      </p>
      {!showForm && !submitted && (
        <button
          className="bg-[#00df9a] text-white py-2 px-4 mt-6 rounded-md shadow-md hover:bg-[#00c48c] transition duration-300"
          onClick={() => setShowForm(true)}
        >
          Join Us
        </button>
      )}
      {showForm && !submitted && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Join Us</h3>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Fill out the form below and we'll get in touch.
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="bg-[#002244] p-4 rounded-lg shadow-lg text-white">
              <div className="flex items-center mb-4">
                <FaUser className="text-[#00df9a] text-lg mr-2" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-gray-500 px-3 py-2 rounded-md w-full text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-[#00df9a] text-lg mr-2" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-gray-500 px-3 py-2 rounded-md w-full text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center mb-4">
                <FaPen className="text-[#00df9a] text-lg mr-2" />
                <textarea
                  placeholder="Your Message"
                  className="bg-transparent border border-gray-500 px-3 py-2 rounded-md w-full text-white"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#00df9a] text-white py-2 px-4 mt-4 rounded-md shadow-md hover:bg-[#00c48c] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {submitted && (
        <p className="mt-6 text-green-500 font-semibold">
          Thank you for submitting! We'll be in touch.
        </p>
      )}
      {showForm && (
        <button
          className="bg-[#00df9a] text-white py-2 px-4 mt-6 rounded-md shadow-md hover:bg-[#00c48c] transition duration-300"
          onClick={() => {
            setShowForm(false);
            setSubmitted(false);
          }}
        >
         
        </button>
      )}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Our Team</h3>
        <p className="text-gray-700">
          Meet the dedicated individuals who are driving our mission forward.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[#002244] p-4 rounded-lg shadow-lg text-white">
            <div className="flex items-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWttJiWyzbXhouuy2P1D8t7am3jvAy_IQarQ&usqp=CAU"
                alt="Team Member"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold">Peter Parker</p>
                <p className="text-gray-400">Chief Executive Officer</p>
              </div>
            </div>
            <p className="text-sm">
              Peter is an experienced leader in the education industry with a passion for innovation and accessibility.
            </p>
          </div>
          {/* Add more team members here */}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
