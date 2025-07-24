import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-24 bg-gradient-to-b from-gray-50 to-white shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-5xl font-bold text-gray-800 mb-8 border-b pb-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="mt-5 text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I’m Shehbaz Shaikh, a MERN Stack Developer passionate about building
        full-stack web applications that are fast, scalable, and user-friendly.
        I enjoy working on real-world projects, connecting frontend to backend
        logic, and solving technical challenges efficiently.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl text-emerald-600 font-bold flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-emerald-600"></span>
          Education
        </h2>
        <p className="mt-4 text-gray-700">
          B.E. in Computer Engineering (2022 – 2026) <br />
          Mumbai University
        </p>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl text-emerald-600 font-bold flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-emerald-600"></span>
          My Goal
        </h2>
        <p className="mt-4 text-gray-700">
          I'm actively working on real-world projects to grow as a full-stack
          developer and contribute to impactful products in a collaborative
          environment.
        </p>
      </motion.div>
    </motion.div>
  );
}
