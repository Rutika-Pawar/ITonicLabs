import React, { useState } from 'react';
import testimonialOne from '../assets/testimonialOne.png';
import testimonialTwo from '../assets/testimonialTwo.jpg';
import testimonialThree from '../assets/testimonialThree.jpg';
import TestimonialPage from '../styles/TestimonialPage.css'; 

const TestimonialPagecomponent = () => {
  const testimonials = [
    {
      id: 1,
      author: 'Rutika Pawar',
      content: 'I had an amazing experience with this company. Their products are top-notch, and the customer service is outstanding.',
      image: testimonialOne,
    },
    {
      id: 2,
      author: 'Rutika Pawar',
      content: 'I\'m extremely satisfied with the services provided. The team went above and beyond to meet my requirements.',
      image: testimonialTwo,
    },
    {
      id: 3,
      author: 'Jane Smith',
      content: 'I\'m extremely satisfied with the services provided. The team went above and beyond to meet my requirements.',
      image: testimonialThree,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-page">
      <h1 className="testimonial-heading">Testimonials</h1>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <h2 className="testimonial-title">WHAT CLIENTS SAY</h2>
          <div className="testimonial-content">
            <img src={testimonials[activeIndex].image} alt={`Testimonial ${activeIndex + 1}`} className="testimonial-image" />
            <div className="testimonial-text">
              <p className="testimonial-description">{testimonials[activeIndex].content}</p>
              <p className="testimonial-author">{`- ${testimonials[activeIndex].author}`}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-navigation">
          <button onClick={handlePrev} className="testimonial-button">&#8249;</button>
          <button onClick={handleNext} className="testimonial-button">&#8250;</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
