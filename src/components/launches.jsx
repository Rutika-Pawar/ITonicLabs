import React, { useState } from 'react';
import screenshot1 from '../assets/screenshot1.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
import screenshot4 from '../assets/screenshot4.png';
import Launches from '../styles/Launches.css';

const Launchescomponent = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const toggleLearnMore = () => {
    setShowLearnMore(!showLearnMore);
  };

  return (
    <div className="app-container">
      <h2 className="launch-heading">
        Our Launches
      </h2>
      <div className="welcome-box">
        Welcome to Product Launch! 👋
        <span className="close-button" onClick={closeWelcome}>
          X
        </span>
        <p>A drive through our launch and discover new tech products.</p>
      </div>
      <div className={`impressive-box ${showContent ? 'show-content' : ''}`}>
        <span className="impressive-header">BRAINBOOSTERJR</span>
        {showContent ? (
          <span className="close-content-button" onClick={toggleContent}>
            X
          </span>
        ) : (
          <button className="check-out-button" onClick={toggleContent}>
            Check Out
          </button>
        )}
      </div>
      {showContent && (
        <div>
          <div className="info">
            <span>BrainBoosterJr Team</span>
            <br />
            No ads • Free to use
          </div>
          <div className="info">
            <span>4.5 stars • 2.5M reviews</span>
            <br />
            10M+ Downloads • Highly rated
          </div>
          <div className="info">
            <span>Content rating</span>
            <br />
            Rated for all ages
          </div>
          <div className="info-devices">
            This app is available for all of your devices
          </div>
          <div className="screenshots">
            {[screenshot1, screenshot2, screenshot3, screenshot4].map(
              (image, index) => (
                <img
                  key={index}
                  className="screenshot"
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                />
              )
            )}
          </div>
          <div className="about-app">
            <h2>About this app :</h2>
            <p>
              BrainBoosterJr is an educational app designed to enhance children's learning experience through interactive lessons and engaging activities.
            </p>
          </div>
          <div className="features">
            <h2>What to explore on BrainBoosterJr:</h2>
            <p>
              Explore a world of knowledge with BrainBoosterJr! Our app offers a wide range of educational content, including math, science, language, and more. Encourage your child's curiosity and creativity with our interactive lessons and quizzes.
            </p>
          </div>
          <div className="footer">
            BrainBoosterJr is committed to providing a safe and educational environment for children. We do not display ads and offer free access to our content.
          </div>
          <div className="learn-more-button-container">
            <button className="learn-more-button" onClick={toggleLearnMore}>
              Learn More
            </button>
          </div>
          {showLearnMore && (
            <div className="learn-more-content">
              <p>Learn more about our privacy policy and terms of use:</p>
              <p>
                Privacy policy: <a href="https://www.brainboosterjr.com/privacy-policy">Privacy Policy</a></p>
              <p>
                Terms of use: <a href="https://www.brainboosterjr.com/terms-of-use">Terms of Use</a></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Launches;
