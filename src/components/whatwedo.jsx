import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { SiProgress, SiReact } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { HiArrowRight } from 'react-icons/hi';

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-[#002244] group hover:bg-[#003377] transition-colors duration-100 group boarder boarder-[#00df9a]">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-white">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-white inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-white inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-white inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-white inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[#00df9a]">
              {title}
            </h2>
            <p className="base text-white">{des}</p>
            <span className="text-2xl text-[#00df9a]">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatsNew = () => {
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
    <section id="whats-new" className="w-full py-20 bg-white border-b-[1px] border-b-black">
      <h2 className="text-3xl md:text-4xl font-titleFont font-bold text-[#00df9a] text-center mb-8">
        WHAT'S NEW
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 px-4 md:px-8 xl:px-16">
        {whatsNewData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;
