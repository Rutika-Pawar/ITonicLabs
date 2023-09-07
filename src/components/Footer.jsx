import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

import itonicLabsLogo from '../assets/itoniclabs.png'; 

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#002244]'>
      <div className='flex items-start'>
        <img
          src={itonicLabsLogo}
          alt='Itonic Labs Logo'
          className='w-20 h-20 mr-4'
        />
        <div>
          <h1 className='text-3xl font-bold text-[#00df9a]'>Itonic Labs</h1>
          <p className='py-4'>Providing innovative tech solutions.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaFacebookSquare size={30} />
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaInstagram size={30} />
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaTwitterSquare size={30} />
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaGithubSquare size={30} />
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              <FaDribbbleSquare size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Services</h6>
          <ul>
            <li className='py-2 text-sm'>Software Development</li>
            <li className='py-2 text-sm'>Web Design</li>
            <li className='py-2 text-sm'>Cloud Solutions</li>
            <li className='py-2 text-sm'>Consulting</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Contact</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Privacy Policy</li>
            <li className='py-2 text-sm'>Terms of Use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
