import React, { useState } from 'react';
import window1 from '../assets/window1.gif';
import window2 from '../assets/window2.gif';
import window3 from '../assets/window3.gif';

const ProductSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [showWindows, setShowWindows] = useState(false);

  const products = [
    {
      image: window1,
    },
    {
      image: window2,
    },
    {
      image: window3,
    },
  ];

  const changeProduct = (index) => {
    setCurrentProduct(index);
  };

  const toggleWindows = () => {
    setShowWindows(!showWindows);
  };

  const inlineStyles = {
    productSection: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh',
    },
    scrollButtonCircle: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginBottom: '20px',
    },
    scrollButtonActive: {
      backgroundColor: '#0056b3',
    },
    scrollIcon: {
      width: '24px',
      height: '24px',
      border: '4px solid white',
      borderLeft: 'none',
      borderTop: 'none',
      transform: 'rotate(45deg)',
    },
    windowsContainer: {
      display: 'flex',
      alignItems: 'center',
      overflowX: 'auto',
    },
    window: {
      width: '300px',
      height: '250px',
      backgroundColor: '#f2f2f2',
      border: '1px solid #ccc',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      margin: '20px',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    activeWindow: {
      transform: 'translateY(-20px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    windowContent: {
      position: 'relative',
    },
    windowButtons: {
      position: 'absolute',
      top: '0',
      right: '0',
      display: 'flex',
    },
    windowButton: {
      width: '16px',
      height: '16px',
      marginRight: '5px',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    closeButton: {
      backgroundColor: '#ff5f56',
    },
    minimizeButton: {
      backgroundColor: '#ffbd2e',
    },
    restoreButton: {
      backgroundColor: '#29ca41',
    },
    exploreButton: {
      position: 'absolute',
      bottom: '50px',
      right: '10px',
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    exploreButtonHover: {
      backgroundColor: '#0056b3',
    },
    content: {
      padding: '20px',
    },
    productVideo: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid white',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={inlineStyles.productSection} className="product-section">
      <div
        style={{
          ...inlineStyles.scrollButtonCircle,
          ...(showWindows ? inlineStyles.scrollButtonActive : {}),
        }}
        className={`scroll-button-circle ${showWindows ? 'active' : ''}`}
        onClick={toggleWindows}
      >
        <div style={inlineStyles.scrollIcon} className="scroll-icon"></div>
      </div>

      {showWindows && (
        <div style={inlineStyles.windowsContainer} className="windows-container">
          {products.map((product, index) => (
            <div
              style={{
                ...inlineStyles.window,
                ...(index === currentProduct ? inlineStyles.activeWindow : {}),
              }}
              className={`window ${index === currentProduct ? 'active' : ''}`}
              key={index}
              onMouseEnter={() => changeProduct(index)}
              onMouseLeave={() => changeProduct(currentProduct)}
            >
              <div style={inlineStyles.windowContent}>
                <div style={inlineStyles.windowButtons}>
                  {/* ... (your window buttons) */}
                </div>
                <img
                  className="product-image"
                  src={product.image}
                  alt={`Product ${index}`}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                {index === currentProduct && (
                 <button
                 className={`explore-button ${index === currentProduct ? 'active' : ''}`}
                 style={{
                   ...inlineStyles.exploreButton,
                   ...(index === currentProduct
                     ? inlineStyles.exploreButtonHover
                     : {}),
                 }}
               >
                 Explore
               </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSection;