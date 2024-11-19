import { useState, useEffect } from 'react';
import {FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap,  FaReact, FaGitAlt } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { IoMail, IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiRedux, SiExpress, SiPostman } from 'react-icons/si';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Home.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 md:p-12 mt-16">
        
        {data.map((item, index) => (
          <div key={index} className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">{item.heading}</h1>
            <img
              src={item.image}
              alt={`Image for ${item.heading}`}
              className="w-3/4 md:w-2/3 lg:w-1/2 max-w-lg mx-auto object-cover mb-6"
            />
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://GitHub.com/Abhay-1718" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                <FaGithub size={32} color="#000" /> {/* GitHub icon color */}
              </a>
              <a href="mailto:abhaysingh80766@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                <IoMail size={32} color="#000" /> {/* Mail icon color */}
              </a>
            </div>
            <h2 className="text-3xl font-semibold mb-4">{item.subheading}</h2>
            <p className="text-lg leading-relaxed mb-6">{item.paragraph}</p>
            <h2 className="text-2xl font-semibold mb-4">Tools  & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <FaHtml5 size={36}  /> 
              <FaCss3Alt size={36}  />
              <RiTailwindCssFill size={36}  />
              <FaBootstrap size={36}  /> 
              <IoLogoJavascript size={36}  /> 
            
              <FaReact size={36}  />
              <SiRedux size={36}  /> 
              <FaGitAlt size={36}  /> 
              <FaNodeJs size={36}  />
              <SiExpress size={36}  />
              <DiMongodb size={36}  />
              <VscVscode size={36}  />
              <SiPostman size={36}  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
