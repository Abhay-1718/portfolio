import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiExpress, SiPostman, SiSocketdotio } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import Hero from "../../assets/Hero.png";
import { Link } from "react-router-dom";
import Aboutmeimg from "../../assets/Aboutme.png";
import Resume from "../../assets/MERN-abhay.pdf";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header/Navigation */}
     {/* Header/Navigation */}
<header className="flex items-center justify-between px-4 py-2 mb-16 flex-wrap">
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 bg-black rounded-full" />
    <span className="font-medium">Abhay</span>
  </div>

  {/* Navbar for all screen sizes */}
  <nav className="flex items-center gap-8 flex-wrap justify-center md:justify-end">
    <Link to="/Projects" className="hover:text-gray-600 py-2 px-3">
      Projects
    </Link>
    <Link to="/connect" className="hover:text-gray-600 py-2 px-3">
      Connect
    </Link>
  </nav>

  {/* Resume Button */}
  <a href={Resume}>
    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
      Resume ↓
    </button>
  </a>
</header>


      {/* Hero Section */}
      <main className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-medium md:text-5xl">
              Hello I'm <span className="font-bold">Abhay Singh</span>
            </h1>
            <h2 className="text-3xl font-bold md:text-4xl">
              FullStack<span className="text-gray-400 ml-2">Developer</span>
            </h2>
            <p className="text-xl">
              Based In <span className="font-bold">India</span>.
            </p>
          </div>

          <p className="text-gray-600 max-w-md text-lg">
            I'm Abhay Singh, an MCA student, dedicated to crafting exceptional
            web experiences. My expertise spans HTML, CSS, Tailwind CSS,
            JavaScript, React, Nodejs, Express Js, MongoDb, Socket.io, Git, and
            GitHub. Eager to bring innovative solutions to the table and
            contribute effectively to dynamic development teams.
          </p>

          <div className="flex gap-4">
            <Link
              to="https://GitHub.com/Abhay-1718"
              className="p-2 border border-gray-300 rounded-full hover:border-black transition-colors"
            >
              <FaGithub className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/abhay-singh-542bb91b5"
              className="p-2 border border-gray-300 rounded-full hover:border-black transition-colors"
            >
              <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
            </Link>
            <Link
              to="#"
              className="p-2 border border-gray-300 rounded-full hover:border-black transition-colors"
            >
              <FaInstagramSquare className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={Hero}
            alt="Developer illustration"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </main>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center md:text-3xl">
          My <span className="font-normal">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            {
              name: "HTML5",
              icon: <FaHtml5 size={36} className="mx-auto mb-2" />,
            },
            {
              name: "CSS3",
              icon: <FaCss3Alt size={36} className="mx-auto mb-2" />,
            },
            {
              name: "Tailwind",
              icon: <RiTailwindCssFill size={36} className="mx-auto mb-2" />,
            },
            {
              name: "JavaScript",
              icon: <IoLogoJavascript size={36} className="mx-auto mb-2" />,
            },
            {
              name: "React",
              icon: <FaReact size={36} className="mx-auto mb-2" />,
            },
            {
              name: "Redux",
              icon: <SiRedux size={36} className="mx-auto mb-2" />,
            },
            {
              name: "Git",
              icon: <FaGitAlt size={36} className="mx-auto mb-2" />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs size={36} className="mx-auto mb-2" />,
            },
            {
              name: "Express",
              icon: <SiExpress size={36} className="mx-auto mb-2" />,
            },
            {
              name: "MongoDB",
              icon: <DiMongodb size={36} className="mx-auto mb-2" />,
            },
            {
              name: "VSCode",
              icon: <VscVscode size={36} className="mx-auto mb-2" />,
            },
            {
              name: "Postman",
              icon: <SiPostman size={36} className="mx-auto mb-2" />,
            },
            {
              name: "Socket.io",
              icon: <SiSocketdotio size={36} className="mx-auto mb-2" />,
            },
            {
              name:"AWS EC2",
              icon: <FaAws  size={36} className="mx-auto mb-2"/>
            }
          ].map((skill, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 flex items-center justify-center bg-white"
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2">{skill.icon}</div>
                <span className="text-sm text-black">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <div className="bg-white text-black flex flex-col md:flex-row-reverse items-center justify-between p-8">
        {/* Right Side - Image */}
        <div className="max-w-xs mb-6 md:mb-0">
          <img
            src={Aboutmeimg}
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Left Side - Text */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-gray-600">Me</span>
          </h1>
          <p className="text-lg text-gray-800">
            Abhay Singh MCA Student | Web Developer Location: Noida, Uttar
            Pradesh Hi, I’m Abhay Singh, an MCA student currently in my third
            semester at Chandigarh University. I completed my Bachelor's degree
            from Delhi University (DU). I'm passionate about web development and
            have expertise in HTML, CSS, and JavaScript, along with modern
            frameworks like React and Tailwind CSS. On the backend, I work with
            Node.js, Express.js, and MongoDB. I’ve also earned certifications in
            Node.js and JavaScript from Namaste Dev, and I'm proficient in using
            Git and GitHub for version control. Currently based in Noida, I’m
            focused on honing my skills, building real-world applications, and
            staying up-to-date with the latest web technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
