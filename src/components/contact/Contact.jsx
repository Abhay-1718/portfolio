import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLink } from "react-icons/ci";


const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/contact.json") 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen pt-20 md:pt-24 lg:pt-28 pb-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Contact Me
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Feel free to reach out to me through email or connect with me on
            social media.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Hey, I am {data.name}
            </h2>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
              Pop me an email at{" "}
              <a
                href={`mailto:${data.email}`}
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                {data.email}
              </a>
            </p>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
              Or give me a call at{" "}
              <a
                href={`tel:${data.phone}`}
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                {data.phone}
              </a>
            </p>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
              Or give me a shout on social media:
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start lg:justify-center space-x-4 md:space-x-6">
              {Object.entries(data.socials).map(([key, value]) => (
                <li key={key} className="mb-4">
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 md:p-4 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <span className={`mr-2 text-3xl ${getIconClass(key)}`}>
                      {getIcon(key)}
                    </span>
                    <span className="text-lg md:text-xl">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      


    </div>
  );
};

// Helper functions to get icons and their styles based on the social platform
const getIconClass = (key) => {
  switch (key) {
    case "linkedin":
      return "text-blue-700 dark:text-blue-400";
    case "github":
      return "text-gray-800 dark:text-gray-100";
    case "instagram":
      return "text-pink-500 dark:text-pink-400";
    default:
      return "";
  }
};

const getIcon = (key) => {
  switch (key) {
    case "linkedin":
      return <CiLinkedin />;
    case "github":
      return <FaGithub />;
    case "instagram":
      return <FaInstagram />;
    default:
      return <CiLink />;
  }
};

export default Contact;
