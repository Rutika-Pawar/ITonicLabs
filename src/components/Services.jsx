import React, { useState } from 'react';
import LaptopImage from '../assets/laptop.jpg';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Services from '../styles/Services.css'; 

const Servicescomponent = () => {
  const [showCards, setShowCards] = useState(false);

  const handleExploreClick = () => {
    setShowCards(true);
  };

  return (
    <div>
      <div className='services-header'>
        <div className='services-header-inner'>
          <img className='services-image' src={LaptopImage} alt='Service Illustration' />
          <div className='services-content'>
            <p className='services-tagline'>OUR SERVICES</p>
            <h1 className='services-title'>Elevate Your Business with Tailored Solutions</h1>
            <p>
              Experience a new level of efficiency and innovation with our suite of comprehensive services. From strategic planning to seamless execution, we're here to help you achieve your business goals and stay ahead in a competitive landscape.
            </p>
            <button
              className='services-button'
              onClick={handleExploreClick}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
      {showCards && (
        <div className='services-cards'>
          <div className='services-cards-inner'>
            <h2 className='services-section-title'>OUR SERVICES</h2>
            <div className='services-card-grid'>
              {/* Card 1 */}
              <div className='services-card'>
                <img className='services-card-icon' src={Single} alt='Single User' />
                <h2 className='services-card-title'>Designer</h2>
                <p className='services-card-description'>Crafting Visual Experiences.</p>
                <div className='services-card-features'>
                  <p className='services-card-feature'>Creative Concepts</p>
                  <p className='services-card-feature'>User-Centered Design</p>
                  <p className='services-card-feature'>Aesthetic Appeal</p>
                </div>
                <button className='services-card-button'>
                  Explore Designer
                </button>
              </div>
              {/* Card 2 */}
              <div className='services-card services-card-alt'>
                <img className='services-card-icon' src={Double} alt='Double User' />
                <h2 className='services-card-title'>Analyst</h2>
                <p className='services-card-description'>Data-Driven Insights.</p>
                <div className='services-card-features'>
                  <p className='services-card-feature'>In-depth Research</p>
                  <p className='services-card-feature'>Data Analysis</p>
                  <p className='services-card-feature'>Actionable Recommendations</p>
                </div>
                <button className='services-card-button services-card-button-alt'>
                  Explore Analyst
                </button>
              </div>
              {/* Card 3 */}
              <div className='services-card'>
                <img className='services-card-icon' src={Triple} alt='Triple User' />
                <h2 className='services-card-title'>Developer</h2>
                <p className='services-card-description'>Turning Ideas into Code.</p>
                <div className='services-card-features'>
                  <p className='services-card-feature'>Full Stack Solutions</p>
                  <p className='services-card-feature'>Robust Codebase</p>
                  <p className='services-card-feature'>Agile Development</p>
                </div>
                <button className='services-card-button'>
                  Explore Developer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
