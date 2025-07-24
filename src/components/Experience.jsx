import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", icon: "https://img.icons8.com/color/96/html-5.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/96/css3.png" },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/96/javascript.png",
  },
  {
    name: "React.js",
    icon: "https://img.icons8.com/color/96/react-native.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/96/tailwindcss.png",
  },
  { name: "Bootstrap", icon: "https://img.icons8.com/color/96/bootstrap.png" },
];

const backendSkills = [
  { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png" },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/ios-filled/96/000000/nodejs.png",
  },
  { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png" },
  {
    name: "Mongoose",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongoose-an-object-data-modeling-library-for-mongodb-logo-color-tal-revivo.png",
  },
];

const tools = [
  { name: "Git", icon: "https://img.icons8.com/color/96/git.png" },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/material-outlined/96/github.png",
  },
  {
    name: "Postman",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/postman.png",
  },
  {
    name: "Cloud Services",
    icon: "https://img.icons8.com/fluency/96/cloud.png",
  },
  { name: "Docker", icon: "https://img.icons8.com/color/96/docker.png" },
  { name: "JWT TOKEN", icon: null },
  { name: "EXPRESS-SESSION", icon: null },
  { name: "REST APIs", icon: null },
];

const SkillGrid = ({ title, skills }) => (
  <motion.div
    className="mb-10 w-full"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl w-32 h-32 justify-center"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.2 }}
        >
          {skill.icon ? (
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
          ) : (
            <div className="text-blue-700 font-bold text-sm mb-2 text-center">
              {skill.name}
            </div>
          )}
          <p className="text-sm font-medium text-gray-700 text-center">
            {skill.icon ? skill.name : ""}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <motion.div
      name="Experience"
      className="bg-gradient-to-br from-[#0099ff] to-[#00ff99] w-screen min-h-screen flex flex-col justify-center items-center px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-semibold text-center mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>

      <SkillGrid title="Frontend" skills={frontendSkills} />
      <SkillGrid title="Backend" skills={backendSkills} />
      <SkillGrid title="Tools & Other Skills" skills={tools} />
    </motion.div>
  );
}
