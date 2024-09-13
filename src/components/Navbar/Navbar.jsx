import { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaComputerMouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300 fixed top-0 left-0 w-full z-50 ease-in-out`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-auto object-contain cursor-pointer" 
          />
        </Link>

        {/* Nav Links for Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center space-x-1 hover:text-gray-400">
            <IoHomeSharp />
            <span>Home</span>
          </Link>
          <Link to="/projects" className="flex items-center space-x-1 hover:text-gray-400">
            <FaComputerMouse />
            <span>Projects</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 hover:text-gray-400">
            <MdOutlinePhoneCallback />
            <span>Contact</span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-gray-400 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Theme Changer Button */}
        <button
          onClick={toggleTheme}
          className={`relative w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 dark:border-gray-400 
            bg-gray-200 dark:bg-gray-700 transition-transform duration-300 ease-in-out 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
            ${darkMode ? 'transform rotate-180' : ''}`}
          aria-label="Toggle Theme"
        >
          <div
            className={`absolute w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out 
              ${darkMode ? 'bg-yellow-500 text-yellow-900' : 'bg-gray-800 text-gray-100'}`}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-900 text-white py-2">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/projects" className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
