import { useState, useEffect } from "react";

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data.length) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-max   transition-transform duration-300 hover:scale-110"
                  style={{ objectFit: 'cover' }} // Ensures the image covers the container
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  {project.title}
                </div>
              </div>
              <div className="p-4 space-y-4"> {/* Adjusted padding */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.previewLink}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-teal-700 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:from-gray-700 hover:to-gray-900 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
