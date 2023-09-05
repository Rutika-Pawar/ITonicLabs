import React, { useState } from 'react';
import screenshot1 from '../assets/screenshot1.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const styles = `
    /* Add your CSS styles here */
    .app-container {
      background-color: #fff;
      font-family: Arial, sans-serif;
      border: 1px solid #ccc;
      border-radius: 0px;
      padding: 20px;
    }

    .header {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }

    .info {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .screenshots {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .screenshot {
      max-width: 200px;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .about-app,
    .features {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .footer {
      font-size: 14px;
    }

    .welcome-box {
      background-color: lightblue;
      padding: 50px;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin-bottom: 70px;
      margin-top: 50px;
      display: ${showWelcome ? 'block' : 'none'};
    }

    .close-button {
      cursor: pointer;
      float: right;
      font-weight: bold;
    }

    .impressive-box {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: transform 0.3s ease;
    }

    .impressive-header {
      font-size: 24px;
      font-weight: bold;
      margin-right: 10px;
    }

    .check-out-button {
      background-color: #00df9a;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .check-out-button:hover {
      background-color: #00987a;
    }
    
    .impressive-box.show-content {
      transform: translateY(-20px);
    }
  `;

  return (
    <div className="app-container">
    <style>{styles}</style>
    <h2 className="launch-heading" style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', marginTop: '50px', color: '#00df9a' }}>
      Our Launches
    </h2>
    <div className="welcome-box" style={{ fontWeight: 'bold' }}>
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
        BrainBoosterJr Team
        <br />
        No ads • Free to use
      </div>
      <div className="info">
        4.5 stars • 2.5M reviews
        <br />
        10M+ Downloads • Highly rated
      </div>
      <div className="info">
        Content rating
        <br />
        Rated for all ages
      </div>
      <div className="info-devices">
        This app is available for all of your devices
      </div>
      <div className="screenshots">
      {/* Add screenshot images here */}
      {[screenshot1, screenshot2, screenshot3].map((image, index) => (
        <img
          key={index}
          className="screenshot"
          src={image}
          alt={`Screenshot ${index + 1}`}
          style={{ margin: '30px' }} 
        />
      ))}
    </div>

      <div className="about-app">
        <h2>About this app</h2>
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
        BrainBoosterJr is committed to providing a safe and educational environment for children. We do not display ads and offer free access to our content. Learn more about our privacy policy and terms of use:
        <br />
        Privacy policy: <a href="https://www.brainboosterjr.com/privacy-policy">Privacy Policy</a>
        <br />
        Terms of use: <a href="https://www.brainboosterjr.com/terms-of-use">Terms of Use</a>
      </div>
    </div>
  )}
  </div>
  );
  };
  
  export default App;