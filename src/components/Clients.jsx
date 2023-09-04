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
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', marginTop: '50px',color: '#00df9a' }}>Testimonials</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#002244', padding: '40px', borderRadius: '10px', color: 'white', maxWidth: '800px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: 'gray' }}>WHAT CLIENTS SAY</h2>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '30px' }}>
            <img src={testimonials[activeIndex].image} alt={`Testimonial ${activeIndex + 1}`} style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid gray', marginBottom: '20px' }} />
            <div style={{ maxWidth: '500px', margin: '0 auto', marginTop: '20px' }}>
              <p style={{ marginBottom: '20px', fontSize: '20px', lineHeight: '1.4' }}>{testimonials[activeIndex].content}</p>
              <p style={{ fontWeight: '600', fontSize: '18px', marginTop: '20px' }}>{`- ${testimonials[activeIndex].author}`}</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={handlePrev} style={{ color: 'gray', cursor: 'pointer', border: 'none', backgroundColor: 'transparent', padding: '20px', borderRadius: '50%', width: '60px', height: '60px', marginRight: '20px', fontSize: '24px', fontWeight: 'bold', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#8249;</button>
          <button onClick={handleNext} style={{ color: 'gray', cursor: 'pointer', border: 'none', backgroundColor: 'transparent', padding: '20px', borderRadius: '50%', width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#8250;</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
