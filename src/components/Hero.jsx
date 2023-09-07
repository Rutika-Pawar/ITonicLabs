import React, { useState } from 'react';
import Typed from 'react-typed';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  const [showContactText, setShowContactText] = useState(false);
  
  const handleContactClick = () => {
    setShowContactText(!showContactText);
    console.log('Contact button clicked');
  };

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackData, setFeedbackData] = useState({ name: '', feedback: '', rating: 0 });
  const [errors, setErrors] = useState({ name: '', feedback: '' });

  const handleFeedbackToggle = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  const handleNameChange = (event) => {
    setFeedbackData({ ...feedbackData, name: event.target.value });
  };

  const handleFeedbackChange = (event) => {
    setFeedbackData({ ...feedbackData, feedback: event.target.value });
  };

  const handleRatingChange = (newRating) => {
    setFeedbackData({ ...feedbackData, rating: newRating });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!feedbackData.name) {
      newErrors.name = 'Name is required';
    }
    if (!feedbackData.feedback) {
      newErrors.feedback = 'Feedback is required';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Feedback submitted:', feedbackData);
      setFeedbackData({ name: '', feedback: '', rating: 0 });
      setIsFeedbackOpen(false);
    } else {
      setErrors(newErrors);
    }
  };

  const handleCloseFeedback = () => {
    setIsFeedbackOpen(false);
  };
 
  const ratingLabels = ["Poor", "Fair", "Good", "Great", "Excellent"];
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    // Add your custom behavior for the button click here
  };
  return (
    <div className='text-white' style={{ backgroundColor: '#002244' }}>
      <div className='max-w-[1000px] h-screen flex flex-col justify-center p-10 mt-[-50px] '>
        <p className='text-[#00df9a] md:text-2xl font-bold mb-30'>
          Transforming education through technology.
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>
          You think..We develop..!!
        </h1>
        <div className='flex items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
            Providing software
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Products', 'Services']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Link to='/launches'>
      <button
        className='bg-[#00df9a] hover:bg-[#0ab883] text-white font-bold py-3 px-6 rounded mt-20 transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
        onClick={handleButtonClick}
      >
        Upcoming Launches
      </button>
    </Link>
      </div>
      
      {/* Add a container for the image */}
<div
   className='h-screen flex items-start justify-end' // Change 'items-center' to 'items-start' and 'justify-center' to 'justify-end'
   style={{ flex: 1, marginTop: '-600px' }}
>
  <img
    src='https://inizsoft.com/wp-content/uploads/2021/02/wordpress-Development-Company-in-India1.gif'
    alt='Training and Application'
    style={{ maxWidth: '100%', maxHeight: '80%' }}
  />
</div>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <button
          onClick={handleContactClick}
          style={{
            backgroundColor: '#00df9a', 
            color: 'white',
            borderRadius: '100px 0 0 100px', 
            width: showContactText ? '120px' : '60px', 
            height: '50px', 
            position: 'fixed',
            bottom: '20px', 
            right: '0', 
            zIndex: 999,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', 
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'width 0.3s',
          }}
        >
          <FaPhone style={{ fontSize: '24px', marginLeft: '20px' }} />
          {showContactText && (
            <span style={{ fontSize: '14px', marginLeft: '8px' }}>Contact Us</span>
          )}
        </button>
      </Link>
      <a
        onClick={handleFeedbackToggle}
        style={{
          color: 'rgb(255, 255, 255)',
          textShadow: 'rgba(0, 0, 0, 0.25) 0px -1px 0px',
          textDecoration: 'none',
          boxShadow: 'none',
          display: 'block',
          cursor: 'pointer',
          backgroundColor: 'rgb(0, 223, 154)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: '0px 0px',
          borderRadius: '5px 5px 0px 0px',
          padding: '12px 14px',
          fontSize: '14px',
          fontWeight: 'bold',
          position: 'fixed',
          top: '50%',
          marginTop: '-22.5px',
          transform: 'rotate(-90deg)',
          zIndex: 999,
          right: '-26.5px',
          left: 'auto',
        }}
      >
     Feedback
      </a>
      
      {isFeedbackOpen && (
        <div
          id='feedback-section'
          className='fixed inset-0 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)] z-50  backdrop-blur-md'
        >
          <div className='bg-[#002244]  border border-white p-6 rounded-lg relative'>
            <button
              onClick={handleCloseFeedback}
              className='absolute top-0 right-0 p-2 text-white hover:text-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-x'
                viewBox='0 0 16 16'
              >
                <path d='M.879 0a.879.879 0 0 1 1.243 0L8 6.757 13.878.878a.879.879 0 0 1 1.243 1.243L9.243 8l5.878 5.878a.879.879 0 0 1-1.243 1.243L8 9.243l-5.878 5.878a.879.879 0 0 1-1.243-1.243L6.757 8 .879 2.122A.879.879 0 0 1 .879 0z' />
              </svg>
            </button>
            <h2 className='text-xl font-semibold mb-2'>Feedback</h2>
            <p className='text-sm mb-4'>We value your input</p>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2'>
                  Name
                </label>
                <input
                  className='w-full px-3 py-2 border rounded-md shadow-sm'
                  type='text'
                  placeholder='Your Name'
                  value={feedbackData.name}
                  onChange={handleNameChange}
                />
                {errors.name && (
                  <p className='text-red-500 text-sm'>{errors.name}</p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2'>
                  Feedback
                </label>
                <textarea
                  className='w-full px-3 py-2 border rounded-md shadow-sm'
                  rows='4'
                  placeholder='Your Feedback'
                  value={feedbackData.feedback}
                  onChange={handleFeedbackChange}
                />
                {errors.feedback && (
                  <p className='text-red-500 text-sm'>{errors.feedback}</p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2'>
                  Rating
                  </label>
                <div>
                  {ratingLabels.map((label, index) => (
                    <label key={index} className='inline-block mr-2'>
                      <input
                        type='radio'
                        value={index + 1}
                        checked={feedbackData.rating === index + 1}
                        onChange={() => handleRatingChange(index + 1)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
              <button
                className='bg-[#00df9a] text-white py-2 px-4 rounded-md hover:bg-[#00bf87] focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
