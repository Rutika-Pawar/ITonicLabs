import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import work1 from '../assets/work 1.jpeg';
import work2 from '../assets/work 2.webp';
import work3 from '../assets/work 3.avif';
import work4 from '../assets/work 4.jpg';
import work5 from '../assets/work 5.jpeg';
import work6 from '../assets/work 6.jpg';

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
    <h3 className="text-sm uppercase font-bold text-white tracking-wide">
      {title}
    </h3>
    <h1 className="text-4xl md:text-5xl text-[#00df9a] font-bold capitalize" style={{ color: '[#00df9a]' }}>{des}</h1>
  </div>
  );
};

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-white from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="works" className="w-full py-20 border-b-[1px] border-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Unveil brilliance in every detail as you explore our products up close." des=" OUR PRODUCTS" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-10 px-4 md:px-8 xl:px-16">
        <ProjectsCard
          title= "Student Performance Dashboard"
          des= "Provide teachers with insights into student performance using a dashboard that displays grades, attendance, and progress over time."
          src= {work1}
        />
        <ProjectsCard
          title="Learning Analytics Dashboard"
          des="Enable administrators to track learning metrics, identify trends, and make data-driven decisions for curriculum improvements."
          src={work2}
        />
        <ProjectsCard
          title="Parent-Teacher Communication Portal"
          des="Build a portal where parents can access real-time updates about their child's academic progress, activities, and school announcements."
          src={work3}
        />
        <ProjectsCard
          title= "Online Course Management Dashboard"
          des="Develop a comprehensive dashboard for instructors to manage course materials, assignments, discussions, and student interactions."
          src={work4}
        />
        <ProjectsCard
          title="Interactive Learning Analytics"
          des="Create an engaging dashboard that students can use to track their learning progress, set goals, and receive personalized recommendations."
          src={work5}
        />
        <ProjectsCard
          title= "Virtual Classroom Dashboard"
          des="Design a dashboard for virtual classrooms, allowing educators to manage video sessions, quizzes, breakout rooms, and attendance."
          src={work6}
        />
      </div>
    </section>
  );
};

export default Projects;
