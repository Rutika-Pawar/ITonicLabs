import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';

const FaqSection = () => {
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
    <div className='w-full py-16 text-white bg-[#002244] px-4'>
      <div className='max-w-[1240px] mx-auto relative'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='my-4'
        >
          <h2 className='md:text-2xl text-xl font-bold pb-4 border-b border-gray-500 text-[#00df9a] mb-4'>
            Frequently Asked Questions?
          </h2>
          <div className='space-y-4'>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className='border rounded-lg bg-[#002244] p-4 cursor-pointer'
              >
                <div
                  onClick={() => toggleAnswer(index)}
                  className='flex items-center justify-between cursor-pointer'
                >
                  <p className='font-bold text-white'>{faq.question}</p>
                  <span className='text-gray-300'>
                    {faq.isOpen ? (
                      <FiChevronUp size={20} />
                    ) : (
                      <FiChevronDown size={20} />
                    )}
                  </span>
                </div>
                {faq.isOpen && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='pl-4 pt-2 text-gray-300'
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
            className='absolute bottom-2 left-1/1 transform -translate-x-4/2 z-40 flex'
          >
          
            <div className='w-100%'>
              <div className='bg-white p-4 rounded-xl border border-gray-300 w-full mx-auto'>
                <div className='flex justify-end'>
                  <button
                    onClick={toggleQueryForm}
                    className='text-gray-300 hover:text-white focus:outline-none'
                  >
                    <FiX size={20} />
                  </button>
                </div>
                <h2 className='text-xl font-bold text-[#00df9a] mb-2'>Query Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block text-[#00df9a] mb-1'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='bg-[#f0f0f0] text-[#00df9a] w-full p-2 rounded border border-gray-300'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='email' className='block text-[#00df9a] mb-1'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='bg-[#f0f0f0] text-[#00df9a] w-full p-2 rounded border border-gray-300'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='message' className='block text-[#00df9a] mb-1'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      className='bg-[#f0f0f0] text-[#00df9a] w-full p-2 rounded border border-gray-300'
                      rows='4'
                    />
                  </div>
                  <button
                    type='submit'
                    className='bg-[#00df9a] text-white px-4 py-2 rounded-lg border border-[#00df9a]'
                  >
                    Submit
                  </button>
                </form>
                {formSubmitted && (
                  <p className='text-[#00df9a] mt-2'>Form submitted successfully!</p>
                )}
              </div>
            </div>
            
          </motion.div>
        )}
        <div className='absolute bottom-15 left-4'>
          <button
            onClick={toggleQueryForm}
            className='bg-[#00df9a] text-white px-6 py-2 rounded-lg border border-white'
          >
            Ask Query's
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;