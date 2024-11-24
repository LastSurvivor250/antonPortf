"use client";
import ProgressBar from "./ProgressBar";
import React, { useState } from "react";

const skills = [
  { iconPath: "/html5.png", title: "HTML", percentage: 90 },
  { iconPath: "/css.png", title: "CSS", percentage: 80 },
  {
    iconPath: "/js.png",
    title: "JavaScript",
    percentage: 95,
  },
  {
    iconPath: "/mongo.png",
    title: "MongoDB",
    percentage: 90,
  },
  {
    iconPath: "/react.png",
    title: "React",
    percentage: 100,
  },
  { iconPath: "/git.png", title: "Git", percentage: 89 },

  { iconPath: "/html5.png", title: "HTML", percentage: 90 },
  { iconPath: "/css.png", title: "CSS", percentage: 80 },
  {
    iconPath: "/js.png",
    title: "JavaScript",
    percentage: 95,
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };
  return (
    <div id="skills" className="w-full h-fit py-20 relative bg-black">
      <div className="flex justify-center">
        <button
          onClick={toggleVisibility}
          className="bg-purple-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5"
        >
          {isVisible ? "Hide Skills" : "Skills"}
        </button>
      </div>
      {isVisible && (
        <div className="max-w-[1400px] w-[91%] mx-auto grid md:grid-cols-3 md:gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <ProgressBar {...skill} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
