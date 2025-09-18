import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/96/html-5.png",
    level: 95,
  },
  { name: "CSS", icon: "https://img.icons8.com/color/96/css3.png", level: 90 },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/96/javascript.png",
    level: 88,
  },
  {
    name: "React.js",
    icon: "https://img.icons8.com/color/96/react-native.png",
    level: 85,
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/96/tailwindcss.png",
    level: 92,
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/96/bootstrap.png",
    level: 87,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/96/nodejs.png",
    level: 85,
  },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/ios-filled/96/000000/nodejs.png",
    level: 82,
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/96/mongodb.png",
    level: 80,
  },
  {
    name: "Mongoose",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongoose-an-object-data-modeling-library-for-mongodb-logo-color-tal-revivo.png",
    level: 78,
  },
];

const tools = [
  { name: "Git", icon: "https://img.icons8.com/color/96/git.png", level: 90 },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/material-outlined/96/github.png",
    level: 88,
  },
  {
    name: "Postman",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/postman.png",
    level: 85,
  },
  {
    name: "Cloud Services",
    icon: "https://img.icons8.com/fluency/96/cloud.png",
    level: 75,
  },
  {
    name: "Docker",
    icon: "https://img.icons8.com/color/96/docker.png",
    level: 70,
  },
  {
    name: "JWT TOKEN",
    icon: null,
    level: 85,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "EXPRESS-SESSION",
    icon: null,
    level: 80,
    gradient: "from-green-400 to-blue-500",
  },
  {
    name: "REST APIs",
    icon: null,
    level: 88,
    gradient: "from-purple-400 to-pink-500",
  },
];

const SkillCard = ({ skill, index, delay }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        type: "spring",
        bounce: 0.4,
      },
    },
    hover: {
      y: -10,
      rotateY: 10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${skill.level}%`,
      transition: {
        duration: 1.5,
        delay: delay + 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 h-full flex flex-col items-center justify-center min-h-[160px] group-hover:bg-white transition-all duration-500">
        {/* Skill icon or text */}
        <motion.div
          className="mb-4 flex items-center justify-center"
          variants={iconVariants}
        >
          {skill.icon ? (
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 drop-shadow-lg"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className={`${
              skill.icon ? "hidden" : "flex"
            } w-16 h-16 rounded-full bg-gradient-to-r ${
              skill.gradient || "from-blue-500 to-purple-600"
            } items-center justify-center text-white font-bold text-xs text-center leading-tight p-2`}
            style={{ display: skill.icon ? "none" : "flex" }}
          >
            {skill.name
              .split(" ")
              .map((word) => word.charAt(0))
              .join("")}
          </div>
        </motion.div>

        {/* Skill name */}
        <h3 className="text-sm font-bold text-gray-800 text-center mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {skill.name}
        </h3>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
            variants={progressVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>

        {/* Skill level percentage */}
        <motion.span
          className="text-xs font-semibold text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 1 }}
        >
          {skill.level}%
        </motion.span>

        {/* Floating particles on hover */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [-5, -15, -5],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillGrid = ({ title, skills, gradient }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      y: -30,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="mb-16 w-full max-w-6xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section title with enhanced styling */}
      <motion.div
        className="text-center mb-12 relative"
        variants={titleVariants}
      >
        <motion.h2
          className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent relative z-10`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h2>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-2 -left-4 w-8 h-8 border-2 border-white/40 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -top-4 -right-2 w-6 h-6 border-2 border-white/40"
          animate={{
            rotate: -360,
            borderRadius: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Underline effect */}
        <motion.div
          className={`mt-4 h-1 bg-gradient-to-r ${gradient} rounded-full mx-auto`}
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Skills grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            index={index}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <motion.div
      name="Experience"
      className="relative w-full min-h-screen px-4 py-20 flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)
        `,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -150, null],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-32 left-16 w-24 h-24 border border-white/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-20 h-20 border border-white/20"
        animate={{
          rotate: -360,
          borderRadius: ["0%", "50%", "25%", "0%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main title */}
      <motion.h1
        className="text-6xl font-bold mb-20 text-center text-white drop-shadow-2xl relative z-10"
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        style={{
          background: "linear-gradient(45deg, #fff, #e0e7ff, #c7d2fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        My Skills & Expertise
        {/* Title glow effect */}
        <motion.div
          className="absolute -inset-8 bg-white/5 rounded-full blur-2xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.h1>

      {/* Skills sections */}
      <SkillGrid
        title="Frontend Development"
        skills={frontendSkills}
        gradient="from-orange-400 via-red-500 to-pink-500"
      />

      <SkillGrid
        title="Backend Development"
        skills={backendSkills}
        gradient="from-green-400 via-blue-500 to-purple-600"
      />

      <SkillGrid
        title="Tools & Technologies"
        skills={tools}
        gradient="from-purple-400 via-pink-500 to-red-500"
      />

      {/* Bottom decorative element */}
      <motion.div
        className="mt-20 text-center text-white/70 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.p
          className="text-lg font-medium"
          animate={{
            textShadow: [
              "0 0 10px rgba(255,255,255,0.3)",
              "0 0 20px rgba(255,255,255,0.6)",
              "0 0 10px rgba(255,255,255,0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💻 Continuously learning and evolving 🚀
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
