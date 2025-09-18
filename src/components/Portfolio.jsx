import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      title: "Faculty Remuneration System",
      tech: "MERN (MongoDB, Express.js, React, Node.js), Bootstrap, JWT Auth, Razorpay",
      description:
        "A comprehensive web-based system for managing faculty remuneration. Features automated payment calculations, PDF slip generation, faculty subject assignment, role-based access control, Mock payment integration, and JWT-based authentication for enhanced security.",
      live: "https://remune-track.netlify.app/",
      code: "https://github.com/ShaikhShehbazK/Faculty-Remuneration-RCOE",
      color: "from-blue-500 to-indigo-600",
      icon: "📊",
      tags: [
        "Full Stack",
        "Payment Gateway",
        "Role-Based Access",
        "PDF Generation",
      ],
    },
    {
      title: "E-Voting Platform",
      tech: "MERN Stack, Cloudinary",
      description:
        "Secure democratic e-voting system with role-based access control, comprehensive admin panel, real-time vote counting, and Cloudinary integration for media management.",
      live: "https://jwtbased-website-e-voting.netlify.app/",
      code: "https://github.com/ShaikhShehbazK/e-voting-website",
      color: "from-purple-500 to-blue-600",
      icon: "🗳️",
      tags: ["Security", "Real-time", "Admin Panel", "Media Upload"],
    },
    {
      title: "Online Bookstore",
      tech: "MERN Stack, Tailwind CSS",
      description:
        "Feature-rich e-commerce bookstore with JWT authentication, shopping cart functionality, comprehensive admin panel, and streamlined payment processing flow.",
      live: "https://your-bookstore-link.netlify.app/",
      code: "https://github.com/ShaikhShehbazK/BookStore",
      color: "from-green-500 to-teal-600",
      icon: "📚",
      tags: ["E-commerce", "Cart System", "Admin Panel", "JWT Auth"],
    },
    {
      title: "Airbnb Clone",
      tech: "React, Express, MongoDB, Stripe",
      description:
        "Modern home rental platform featuring Stripe mock payments, advanced filtering system, interactive date selection, and secure user authentication.",
      live: "https://your-airbnb-site.netlify.app/",
      code: "https://github.com/ShaikhShehbazK/airbnb-clone",
      color: "from-pink-500 to-rose-600",
      icon: "🏠",
      tags: [
        "Rental Platform",
        "Payment Integration",
        "Filtering",
        "Date Picker",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.3,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      name="Portfolio"
      className="relative w-full min-h-screen px-4 py-16 flex flex-col items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at center, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)
        `,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-white/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/30"
        animate={{
          rotate: -360,
          borderRadius: ["0%", "50%", "0%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.h1
        className="text-6xl font-bold mb-16 text-center text-white drop-shadow-2xl relative z-10"
        variants={titleVariants}
        style={{
          background: "linear-gradient(45deg, #fff, #f0f9ff, #ddd6fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        My Projects
        <motion.div
          className="absolute -inset-4 bg-white/10 rounded-full blur-xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={cardVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            {/* Card glow effect */}
            <motion.div
              className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000`}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main card */}
            <div className="relative bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-white/20 hover:bg-white transition-all duration-500 group">
              {/* Animated icon with pulse effect */}
              <motion.div
                className="text-4xl mb-4 inline-block relative"
                variants={iconVariants}
                whileHover="hover"
              >
                {project.icon}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-30 rounded-full blur-md"
                  style={{
                    background: `linear-gradient(45deg, ${project.color
                      .replace("from-", "")
                      .replace("to-", ", ")})`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.h2
                className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {project.title}
              </motion.h2>

              {/* Enhanced tech stack with better styling */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <p className="text-xs font-bold text-gray-800 mb-2 uppercase tracking-wide">
                  Tech Stack
                </p>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-2 rounded-lg border-l-4 border-gradient-to-b from-gray-300 to-gray-400">
                  {project.tech}
                </p>
              </motion.div>

              {/* Feature tags */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.35 }}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white shadow-sm`}
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 + tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.p
                className="text-gray-700 text-sm mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {project.description}
              </motion.p>

              {/* Enhanced buttons with better styling */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🔗 Live Demo
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>

                <motion.a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 relative overflow-hidden group/btn"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    💻 Source Code
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              </div>

              {/* Enhanced animation overlay */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: "left" }}
              />

              {/* Corner decoration */}
              <motion.div
                className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${project.color} rounded-full opacity-50`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative element */}
      <motion.div
        className="mt-16 text-center text-white/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.p
          className="text-lg font-medium"
          animate={{
            textShadow: [
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 10px rgba(255,255,255,0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨ Crafted with passion and precision ✨
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
