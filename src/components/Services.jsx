import React, { useState } from 'react';
import LaptopImage from '../assets/laptop.jpg';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Services = () => {
  const [showCards, setShowCards] = useState(false);

  const handleExploreClick = () => {
    setShowCards(true);
  };

  return (
    <div>
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={LaptopImage} alt='Service Illustration' />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>OUR SERVICES</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Elevate Your Business with Tailored Solutions</h1>
            <p>
              Experience a new level of efficiency and innovation with our suite of comprehensive services. From strategic planning to seamless execution, we're here to help you achieve your business goals and stay ahead in a competitive landscape.
            </p>
            <button
              className='bg-[#002244] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'
              style={{ backgroundColor: '#002244' }}
              onClick={handleExploreClick}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
      {showCards && (
        <div className='w-full py-[10rem] px-4 bg-white'>
          <div className='max-w-[1240px] mx-auto'>
            <h2 className='md:text-2xl text-xl font-bold pb-4 border-b border-gray-500 text-[#00df9a] text-center'>
              OUR SERVICES
            </h2>
            <div className='grid md:grid-cols-3 gap-8 mt-8'>
              {/* Card 1 */}
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='Single User' />
                <h2 className='text-2xl font-bold text-center py-8'>Designer</h2>
                <p className='text-center text-4xl font-bold'>Crafting Visual Experiences.</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Creative Concepts</p>
                  <p className='py-2 border-b mx-8'>User-Centered Design</p>
                  <p className='py-2 border-b mx-8'>Aesthetic Appeal</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                  Explore Designer
                </button>
              </div>
              {/* Card 2 */}
              <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='Double User' />
                <h2 className='text-2xl font-bold text-center py-8'>Analyst</h2>
                <p className='text-center text-4xl font-bold'>Data-Driven Insights.</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>In-depth Research</p>
                  <p className='py-2 border-b mx-8'>Data Analysis</p>
                  <p className='py-2 border-b mx-8'>Actionable Recommendations</p>
                </div>
                <button className='bg-[#002244] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                  Explore Analyst
                </button>
              </div>
              {/* Card 3 */}
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='Triple User' />
                <h2 className='text-2xl font-bold text-center py-8'>Developer</h2>
                <p className='text-center text-4xl font-bold'>Turning Ideas into Code.</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Full Stack Solutions</p>
                  <p className='py-2 border-b mx-8'>Robust Codebase</p>
                  <p className='py-2 border-b mx-8'>Agile Development</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
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
