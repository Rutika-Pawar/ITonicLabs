import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import FaqSection from '../styles/FaqSection.css';

const FaqSectioncomponent = () => {
  const [faqData, setFaqData] = useState([
    {
      question: 'What Industries Does itonic labs Serve?',
      answer:
        'itonic labs specializes in serving industries such as technology, healthcare, finance, e-commerce, and more. While these are our primary areas of focus, we\'re always open to exploring new industries and challenges. Our diverse portfolio showcases the range of projects we have successfully undertaken. Whether you need cutting-edge software solutions, innovative applications, or customized digital experiences, itonic labs has you covered.',
      isOpen: false,
    },
    {
      question: 'What is itonic labs\' Project Management Approach?',
      answer:
        'At itonic labs, our project management approach is agile and collaborative. We emphasize frequent communication, iterative development, and active stakeholder involvement. This methodology ensures your project remains adaptable, aligns with evolving needs, and delivers superior outcomes.',
      isOpen: false,
    },
    {
      question: 'How Are Project Costs Determined?',
      answer:
        'Project costs at itonic labs are determined based on the scope and complexity of your project. We offer customized solutions tailored to your specific requirements and budget. For a precise cost estimate, we recommend initiating a conversation with our team. We\'ll conduct a comprehensive assessment of your needs and provide you with a detailed proposal.',
      isOpen: false,
    },
  ]);

  const [showQueryForm, setShowQueryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleAnswer = (index) => {
    const updatedFaqData = [...faqData];
    updatedFaqData[index].isOpen = !updatedFaqData[index].isOpen;
    setFaqData(updatedFaqData);
  };

  const toggleQueryForm = () => {
    setShowQueryForm(!showQueryForm);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="faq-section">
      <div className="max-w-[1240px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          <h2 className="faq-heading">Frequently Asked Questions?</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${faq.isOpen ? 'open' : ''}`}
              >
                <div
                  onClick={() => toggleAnswer(index)}
                  className="faq-toggle"
                >
                  <p className="faq-question">{faq.question}</p>
                  <span className="faq-icon">
                    {faq.isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </span>
                </div>
                {faq.isOpen && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="faq-answer"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        {showQueryForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="query-form"
          >
            <div className="form-container">
              <div className="flex justify-end">
                <button
                  onClick={toggleQueryForm}
                  className="text-gray-300 hover:text-white focus:outline-none"
                >
                  <FiX size={20} />
                </button>
              </div>
              <h2 className="form-heading">Query Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="4"
                  />
                </div>
                <button
                  type="submit"
                  className="form-submit"
                >
                  Submit
                </button>
              </form>
              {formSubmitted && (
                <p className="form-success">Form submitted successfully!</p>
              )}
            </div>
          </motion.div>
        )}
        <div className="query-button">
          <button
            onClick={toggleQueryForm}
            className="form-submit"
          >
            Ask Query's
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
