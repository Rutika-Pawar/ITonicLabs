import React, { useState } from 'react';
import Typed from 'react-typed';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Hero from '../styles/hero.css';

const HeroComponent  = () => {
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
    <div className='hero-container'>
      <div className='hero-content'>
        <p className='education-text'>
          Transforming education through technology.
        </p>
        <h1 className='develop-text'>
          You think..We develop..!!
        </h1>
        <div className='software-text'>
          <p className='providing-text'>
            Providing software
          </p>
          <Typed
            className='products-services-text'
            strings={['Products', 'Services']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Link to='/launches'>
          <button
            className='launches-button'
            onClick={handleButtonClick}
          >
            Upcoming Launches
          </button>
        </Link>
      </div>

      {/* Add a container for the image */}
      <div className='image-container'>
        <img
          src='https://inizsoft.com/wp-content/uploads/2021/02/wordpress-Development-Company-in-India1.gif'
          alt='Training and Application'
        />
      </div>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <button
          onClick={handleContactClick}
          className='contact-button'
        >
          <FaPhone style={{ fontSize: '24px', marginLeft: '20px' }} />
          {showContactText && (
            <span style={{ fontSize: '14px', marginLeft: '8px' }}>Contact Us</span>
          )}
        </button>
      </Link>
      <a
        onClick={handleFeedbackToggle}
        className='feedback-button'
      >
        Feedback
      </a>

      {isFeedbackOpen && (
        <div className='feedback-section'>
          <div className='feedback-content'>
            <button
              onClick={handleCloseFeedback}
              className='close-button'
            >
              Close
            </button>
            <h2 className='feedback-title'>Feedback</h2>
            <p className='feedback-description'>We value your input</p>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name' className='label-text'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='input-field'
                  placeholder='Your Name'
                  value={feedbackData.name}
                  onChange={handleNameChange}
                />
                {errors.name && (
                  <p className='error-text'>{errors.name}</p>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='feedback' className='label-text'>
                  Feedback
                </label>
                <textarea
                  id='feedback'
                  className='textarea-field'
                  rows='4'
                  placeholder='Your Feedback'
                  value={feedbackData.feedback}
                  onChange={handleFeedbackChange}
                />
                {errors.feedback && (
                  <p className='error-text'>{errors.feedback}</p>
                )}
              </div>
              <div className='form-group'>
                <label className='label-text'>
                  Rating
                </label>
                <div className='rating-options'>
                  {ratingLabels.map((label, index) => (
                    <label key={index} className='rating-label'>
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
                className='submit-button'
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
