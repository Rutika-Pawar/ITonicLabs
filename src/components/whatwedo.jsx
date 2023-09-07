import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { SiProgress, SiReact } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { HiArrowRight } from 'react-icons/hi';
import WhatsNew from '../styles/WhatsNew.css'; 

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="whats-new-card">
      <div className="whats-new-card-inner">
        <div className="whats-new-card-content">
          <div className="whats-new-icon">
            {icon ? (
              <span className="whats-new-icon-text">{icon}</span>
            ) : (
              <>
                <span className="whats-new-icon-line"></span>
                <span className="whats-new-icon-line"></span>
                <span className="whats-new-icon-line"></span>
                <span className="whats-new-icon-line"></span>
              </>
            )}
          </div>
          <div className="whats-new-details">
            <h2 className="whats-new-title">{title}</h2>
            <p className="whats-new-description">{des}</p>
            <span className="whats-new-arrow">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatsNewcomponent = () => {
  const whatsNewData = [
    {
      id: 1,
      title: 'AI and Software Solutions',
      des: 'Providing cutting-edge AI and software solutions to transform businesses and enhance efficiency.',
      icon: <SiReact />,
    },
    {
      id: 2,
      title: 'Educational Technology',
      des: 'Transforming education through innovative technology solutions that empower students and educators.',
      icon: <AiFillAppstore />,
    },
    {
      id: 3,
      title: 'SEO Optimization',
      des: 'Implementing SEO strategies to improve website ranking and visibility on search engines, driving organic traffic.',
      icon: <SiProgress />,
    },
    {
      id: 4,
      title: 'Mobile UX/UI',
      des: 'Designing intuitive and user-friendly mobile interfaces, prioritizing user experience and engagement.',
      icon: <FaMobile />,
    },
    {
      id: 5,
      title: 'React Component Libraries',
      des: 'Creating reusable and efficient React component libraries to streamline development processes.',
      icon: <DiReact />,
    },
    {
      id: 6,
      title: 'Website Deployment',
      des: 'Deploying websites to hosting platforms, ensuring smooth performance and accessibility worldwide.',
      icon: <FaGlobe />,
    },
  ];

  return (
    <section id="whats-new" className="whats-new-section">
      <h2 className="whats-new-section-title">WHAT'S NEW</h2>
      <div className="whats-new-grid">
        {whatsNewData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;
