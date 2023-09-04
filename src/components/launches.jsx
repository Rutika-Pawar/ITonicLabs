import React, { useState } from 'react';


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
      border-radius: 10px;
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

    .check-out-button {
      background-color: #00df9a;
      color: white;
      padding: 4px 5px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .close-content-button {
      cursor: pointer;
      font-size: 24px;
    }
  `;

  return (
    <div className="app-container">
    <style>{styles}</style>
    <h2 className="launch-heading" style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', marginTop: '50px',color: '#00df9a' }}>
      Our Launches
    </h2>
    <div className="welcome-box"style={{ fontWeight: 'bold'}}>
      Welcome to Product Launch! 👋
      <span className="close-button" onClick={closeWelcome}>
        X
      </span>
        <p>A drive through our launch and discover new tech products.</p>
      </div>
      <header className="header">
        BRAINBOOSTERJR
        {showContent ? (
          <span className="close-content-button" onClick={toggleContent}>
            X
          </span>
        ) : (
          <button className="check-out-button" onClick={toggleContent}>
            Check Out
          </button>
        )}
      </header>

     
       
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
        <img className="screenshot" src={require('../assets/screenshot1.png').default} alt="Screenshot 1" />
        <img className="screenshot" src={require('../assets/screenshot2.png').default} alt="Screenshot 2" />
        <img className="screenshot" src={require('../assets/screenshot3.png').default} alt="Screenshot 3" />
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