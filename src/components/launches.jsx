import React, { useState } from 'react';
import screenshot1 from '../assets/screenshot1.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
import screenshot4 from '../assets/screenshot4.png';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false); // New state for Learn More content

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const toggleLearnMore = () => {
    setShowLearnMore(!showLearnMore); // Toggle the Learn More content
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
      padding-bottom: 10px; /* Adjust the padding to control the spacing between text and line */
      margin-bottom: 20px; /* Adjust the margin to control the spacing between info blocks */
    }
    
    .info span {
      border-bottom: 1px solid #002244; /* You can adjust the color as needed */
      padding-bottom: 2px; /* Adjust the padding to control the spacing between text and line */
    }
    
    .info-devices {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .screenshots {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      margin-up: 20px;
    }
    
    .screenshot {
      max-width: 200px;
      margin-right: 20px;
      margin-bottom: 20px;
      margin-up: 50px;
      transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transitions for both transform and box-shadow */
      transform-origin: center bottom; /* Set the transform origin to center bottom */
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); /* Add a shadow to the image */
    }
    
    /* Apply a scale transform on hover and increase the shadow */
    .screenshot:hover {
      transform: scale(1.05) translateY(5px); /* Slightly down and zoom-in effect */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Increase the shadow on hover */
    }

    .about-app,
.features {
  font-size: 18px;
  margin-bottom: 20px;
  max-width: 1000px; /* Set a maximum width for the text container */
}

.footer {
  font-weight: bold;
  font-size: 16px; /* You can adjust the font size as needed */
  margin-bottom: 20px;
  max-width: 1000px;
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
    . close-content-button {
      cursor: pointer;
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
      background-color: #002244;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .check-out-button:hover {
      background-color: #0033A0;
    }
    
    .impressive-box.show-content {
      transform: translateY(-20px);
    }
    .learn-more-button {
      background-color: #006B7F; /* Background color for the button */
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    
    .learn-more-button:hover {
      background-color: #005267; /* Background color on hover */
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
  {/* Add screenshot images here */}
  {[screenshot1, screenshot2, screenshot3, screenshot4].map((image, index) => (
    <img
      key={index}
      className="screenshot"
      src={image}
      alt={`Screenshot ${index + 1}`}
    />
  ))}
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
        {/* Learn More button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button className="learn-more-button" onClick={toggleLearnMore}>
              Learn More
            </button>
          </div>

          {/* Learn More content */}
          {showLearnMore && (
            <div className="learn-more-content">
              {/* Add your Learn More content here */}
              <p>Learn more about our privacy policy and terms of use:
        <br />
        Privacy policy: <a href="https://www.brainboosterjr.com/privacy-policy">Privacy Policy</a>
        <br />
        Terms of use: <a href="https://www.brainboosterjr.com/terms-of-use">Terms of Use</a>
      </p>
            
              </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;