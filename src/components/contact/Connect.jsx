import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms response:", data);

      if (data.success) {
        setResult("Form submitted successfully");
        e.target.reset();
      } else {
        setResult(data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <Link
        to="/"
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
      >
        Back to Home
      </Link>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
        {/* Form Section */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <input
              type="url"
              name="website"
              placeholder="Your website (If exists)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <textarea
              name="message"
              placeholder="How can I help?*"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            ></textarea>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </button>

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
          </form>
          {result && (
            <div className="mt-4 text-center text-lg text-gray-700">
              {result}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Let's{" "}
            <span className="inline-block px-2 py-1 bg-gray-200 text-black">
              talk
            </span>{" "}
            for Something special
          </h1>

          <p className="text-gray-600 text-lg">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          <div className="space-y-2">
            <p className="text-xl font-medium text-gray-800">
              abhaysingh80766@gmail.com
            </p>
            <p className="text-xl font-medium text-gray-800">8076628116</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
