import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

import itonicLabsLogo from '../assets/itoniclabs.png'; 
import Footer from '../styles/Footer.css';

const Footercomponent = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <img
          src={itonicLabsLogo}
          alt='Itonic Labs Logo'
          className='logo-image'
        />
        <div>
          <h1 className='logo-title'>Itonic Labs</h1>
          <p className='logo-description'>Providing innovative tech solutions.</p>
          <div className='social-links'>
            <a href='#' className='social-link'>
              <FaFacebookSquare size={30} />
            </a>
            <a href='#' className='social-link'>
              <FaInstagram size={30} />
            </a>
            <a href='#' className='social-link'>
              <FaTwitterSquare size={30} />
            </a>
            <a href='#' className='social-link'>
              <FaGithubSquare size={30} />
            </a>
            <a href='#' className='social-link'>
              <FaDribbbleSquare size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-links'>
        <div>
          <h6 className='link-title'>Services</h6>
          <ul>
            <li className='link-item'>Software Development</li>
            <li className='link-item'>Web Design</li>
            <li className='link-item'>Cloud Solutions</li>
            <li className='link-item'>Consulting</li>
          </ul>
        </div>
        <div>
          <h6 className='link-title'>Support</h6>
          <ul>
            <li className='link-item'>Pricing</li>
            <li className='link-item'>Documentation</li>
            <li className='link-item'>Guides</li>
            <li className='link-item'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='link-title'>Company</h6>
          <ul>
            <li className='link-item'>About Us</li>
            <li className='link-item'>Blog</li>
            <li className='link-item'>Careers</li>
            <li className='link-item'>Contact</li>
          </ul>
        </div>
        <div>
          <h6 className='link-title'>Legal</h6>
          <ul>
            <li className='link-item'>Privacy Policy</li>
            <li className='link-item'>Terms of Use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
