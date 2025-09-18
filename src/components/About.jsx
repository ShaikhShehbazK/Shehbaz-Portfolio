import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
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

  return (
    <motion.div
      name="About"
      className="relative w-full min-h-screen px-4 py-20 flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)
        `,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 border border-white/20"
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

      {/* Main content container */}
      <motion.div
        className="relative max-w-5xl mx-auto"
        variants={cardVariants}
      >
        {/* Glowing background effect */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-3xl blur-xl opacity-60"
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main card */}
        <div className="relative bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 border border-white/30">
          {/* Title section */}
          <motion.div className="text-center mb-12" variants={titleVariants}>
            <motion.h1
              className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              About Me
              {/* Title decoration */}
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Introduction paragraph */}
          <motion.div className="mb-12" variants={sectionVariants}>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm{" "}
              <span className="font-bold text-blue-600">Shehbaz Shaikh</span>, a
              passionate
              <span className="font-semibold text-purple-600">
                {" "}
                MERN Stack Developer
              </span>{" "}
              dedicated to crafting exceptional full-stack web applications that
              are fast, scalable, and user-friendly. I thrive on tackling
              real-world challenges, seamlessly connecting frontend experiences
              with robust backend logic, and delivering innovative solutions
              that make a difference.
              {/* Decorative quote marks */}
              <motion.span
                className="absolute -top-4 -left-4 text-4xl text-blue-500/30"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                "
              </motion.span>
              <motion.span
                className="absolute -bottom-4 -right-4 text-4xl text-purple-500/30"
                animate={{
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                "
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Two-column layout for Education and Goals */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Section */}
            <motion.div
              className="group"
              variants={sectionVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200/50 group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative icon */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <span className="text-white text-xl">🎓</span>
                </motion.div>

                <motion.h2
                  className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Education
                  <motion.div
                    className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-grow"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.h2>

                <motion.div
                  className="ml-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-gray-700 font-semibold text-lg">
                    B.E. in Computer Engineering
                  </p>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">2022 — 2026</span>
                  </p>
                  <p className="text-blue-600 font-medium mt-1">
                    Mumbai University
                  </p>
                </motion.div>

                {/* Floating particle */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    y: [-3, -8, -3],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Goals Section */}
            <motion.div
              className="group"
              variants={sectionVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg border border-green-200/50 group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative icon */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <span className="text-white text-xl">🎯</span>
                </motion.div>

                <motion.h2
                  className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3 ml-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  My Goals
                  <motion.div
                    className="h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex-grow"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.h2>

                <motion.p
                  className="text-gray-700 leading-relaxed ml-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  I'm actively working on real-world projects to evolve as a
                  <span className="font-semibold text-green-600">
                    {" "}
                    full-stack developer
                  </span>{" "}
                  and contribute to impactful products in collaborative
                  environments. My goal is to create solutions that not only
                  meet technical requirements but also
                  <span className="font-semibold text-green-600">
                    {" "}
                    enhance user experiences
                  </span>
                  and drive business success.
                </motion.p>

                {/* Floating particle */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    y: [-3, -8, -3],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom decorative element */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.p
              className="text-gray-600 font-medium"
              animate={{
                textShadow: [
                  "0 0 5px rgba(59, 130, 246, 0.3)",
                  "0 0 10px rgba(139, 92, 246, 0.4)",
                  "0 0 5px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨ Passionate about creating exceptional digital experiences ✨
            </motion.p>
          </motion.div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
