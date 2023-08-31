import React, { useState } from 'react';
import testimonialOne from '../assets/testimonialOne.png';
import testimonialTwo from '../assets/testimonialTwo.jpg';
import testimonialThree from '../assets/testimonialThree.jpg';

const TestimonialPage = () => {
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
      id: 2,
      author: 'Jane Smith',
      content: 'I\'m extremely satisfied with the services provided. The team went above and beyond to meet my requirements.',
      image: testimonialThree,
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#00df9a' }}>Testimonials</h1>
      <div style={{ backgroundColor: '#002244', padding: '40px', borderRadius: '10px', color: 'white', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: '#00df9a' }}>WHAT CLIENTS SAY</h2>
        <div style={{ marginBottom: '30px' }}>
          <img src={testimonials[activeIndex].image} alt={`Testimonial ${activeIndex + 1}`} style={{ width: '120px', height: '120px', borderRadius: '50%', marginRight: '20px' }} />
          <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <p style={{ marginBottom: '10px' }}>{testimonials[activeIndex].content}</p>
            <p style={{ fontWeight: '600' }}>{`- ${testimonials[activeIndex].author}`}</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handlePrev} style={{ color: 'white', marginRight: '20px', cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}>&lt;</button>
          <button onClick={handleNext} style={{ color: 'white', cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
