import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      title: "E-Voting Platform",
      tech: "MERN Stack",
      description:
        "Secure e-voting system with role-based access, admin panel, and Cloudinary integration.",
      live: "https://jwtbased-website-e-voting.netlify.app/",
      code: "https://github.com/ShaikhShehbazK/e-voting-website",
    },
    {
      title: "Online Bookstore",
      tech: "MERN Stack + Tailwind",
      description:
        "E-commerce bookstore with JWT auth, cart, admin panel, and payment flow.",
      live: "https://your-bookstore-link.netlify.app/",
      code: "https://github.com/ShaikhShehbazK/BookStore",
    },
    {
      title: "Airbnb Clone",
      tech: "React, Express, MongoDB",
      description:
        "Home rental platform with Stripe mock payment, filters, date selection, and secure auth.",
      live: "https://your-airbnb-site.netlify.app/",
      code: "https://github.com/ShaikhShehbazK/airbnb-clone",
    },
  ];

  return (
    <motion.div
      name="Portfolio"
      className="bg-gradient-to-br from-[#ffee00] to-[#bfff00] w-full min-h-screen px-4 py-10 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Tech Stack:</strong> {project.tech}
            </p>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                🔗 Live
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline"
              >
                💻 Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Portfolio;
