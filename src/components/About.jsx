import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-24 bg-gradient-to-b from-gray-50 to-white shadow-lg rounded-2xl"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-8 border-b pb-4">
          About Me
        </h1>
        <p className="mt-5 text-lg text-gray-700 leading-relaxed">
          Hello, I'm Shaikh Shehbaz, a passionate Web developer with a keen eye
          for MERN Stack. With a background in IT, I strive to create impactful
          and visually stunning Software solutions that leave a lasting
          impression.
        </p>
        <h1 className="text-2xl text-emerald-600 font-bold mt-10 flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-emerald-600"></span>
          Education & Training
        </h1>
        <p className="mt-4 text-gray-700 bg-white p-6 rounded-lg shadow-sm">
          <span className="font-semibold">
            Bachelor of Engineering (B.E.) in Computer Engineering
          </span>
          <br />
          Mumbai University | 2022 – 2026 (Pursuing)
          <br />
          "Currently enhancing my skills in MERN stack development through
          self-learning and hands-on projects."
        </p>
        <h1 className="text-2xl text-emerald-600 font-bold mt-10 flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-emerald-600"></span>
          Skills & Expertise
        </h1>
        <p className="mt-4 text-gray-700 bg-white p-6 rounded-lg shadow-sm space-y-2">
          <span className="font-semibold block">MERN Stack Development:</span>
          React, Node.js, Express, MongoDB, Git, REST APIs
          <br />
          <span className="font-semibold block mt-2">Core Competencies:</span>
          Component-based architecture, State management (Context API),
          Responsive UI design
          <br />
          <span className="font-semibold block mt-2">Soft Skills:</span>
          Team collaboration, Clean code practices, Quick adaptation to new
          technologies
        </p>
        <h1 className="text-2xl text-emerald-600 font-bold mt-10 flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-emerald-600"></span>
          Achievements & Awards
        </h1>
        <p className="mt-4 text-gray-700 bg-white p-6 rounded-lg shadow-sm">
          Completed multiple hands-on MERN stack projects showcasing real-world
          problem-solving skills.
        </p>
        <h1 className="text-2xl text-emerald-600 font-bold mt-10 flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-emerald-600"></span>
          Mission Statement
        </h1>
        <p className="mt-4 text-gray-700 bg-white p-6 rounded-lg shadow-sm leading-relaxed">
          My mission is to leverage my skills and creativity to deliver
          innovative WEB DEV solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </>
  );
}

export default About;
