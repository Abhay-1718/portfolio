import SproutLogo from '../../assets/Sprout-logo.png';
import ChattrixLogo from '../../assets/chattrix-logo.png';
import CodeKamiLogo from '../../assets/codekamilogo.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "CodeKami",
      description: "CodeKami is a cutting-edge, full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to revolutionize the way developers review and refine their code. Powered by Google Gemini AI, CodeKami provides an intelligent, automated solution for reviewing code, offering deep insights and feedback to improve quality, performance, and maintainability",
      image: CodeKamiLogo,
      link: "https://code-kami-frontend.vercel.app",
    },
    {
      number: "02",
      title: "Sprout",
      description: "Sprout is a simple, command-line version control system (VCS) designed for developers to track changes in their codebase. It provides functionality similar to other version control systems, like Git, but in a lightweight and easy-to-use manner.",
      image: SproutLogo,
      link: "https://github.com/Abhay-1718/Sprout-vcs.git",
    },
    {
      number: "03",
      title: "Chattrix",
      description: "This is a full-stack chat application built with the MERN stack (MongoDB, Express, React, Node.js). The app allows users to connect in real-time through a chat interface, leveraging technologies like Socket.IO, JWT authentication, and MongoDB for storing user data.",
      image: ChattrixLogo,
      link: "https://chattrix-frontend.onrender.com",
    },
    
  ];

  return (
    <div className="bg-black min-h-screen text-white px-4 py-16 md:px-8 lg:px-16">
      <div className="mb-4">
        <Link 
          to="/" 
          className="px-6 py-2 bg-white text-black rounded hover:bg-gray-800 transition-colors block text-center mx-auto max-w-xs sm:max-w-sm">
          Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-20 text-center">My Projects</h1>

      <div className="space-y-16 md:space-y-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full md:max-w-xs lg:max-w-sm h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">{project.number}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{project.title}</h2>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                className=" hover:opacity-75 transition-opacity flex items-center space-x-2"
              >
                <span>Link</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
