import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import itonicLabsLogo from '../assets/itoniclabs.png';
import Navbar from '../styles/Navbar.css';

const Navbarcomponent = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <h1 className="logo">
        <img
          className="logo-icon"
          src={itonicLabsLogo}
          alt="itonicLabsLogo"
        />
        <Link to="/">ITONIC LABS</Link>
      </h1>
      <ul className="menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/about">COMPANY</Link></li> 
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div onClick={handleNav} className="mobile-menu">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'mobile-menu-list' : 'mobile-menu-list-hidden'}>
        <h1 className="mobile-logo">ITONIC LABS</h1>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/about">COMPANY</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
