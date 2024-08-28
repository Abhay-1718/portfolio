import { useState, useEffect } from 'react';
import { FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaReact, FaGitAlt } from 'react-icons/fa';
import { IoMail, IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';

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
        {/* Add top margin to ensure content starts below the fixed Navbar */}
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
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <FaHtml5 size={36} color="#E34F26" /> {/* HTML5 icon color */}
              <FaCss3Alt size={36} color="#1572B6" /> {/* CSS3 icon color */}
              <RiTailwindCssFill size={36} color="#38BDF8" /> {/* Tailwind CSS icon color */}
              <FaBootstrap size={36} color="#563D7C" /> {/* Bootstrap icon color */}
              <IoLogoJavascript size={36} color="#F7DF1E" /> {/* JavaScript icon color */}
              <FaPython size={36} color="#3776AB" /> {/* Python icon color */}
              <FaReact size={36} color="#61DAFB" /> {/* React icon color */}
              <SiRedux size={36} color="#764ABC" /> {/* Redux icon color */}
              <FaGitAlt size={36} color="#F05032" /> {/* Git icon color */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
