"use client";

import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  image: string;
  url: string;
}
const Portfolio: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevProjects) => prevProjects + 4);
  };

  return (
    <div id="projects" className="w-full h-fit  relative bg-black">
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="flex justify-center">
          <button
            onClick={toggleVisibility}
            className="bg-purple-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5"
          >
            {isVisible ? "Hide Projects" : "Current Projects"}
          </button>
        </div>
        {isVisible && (
          <div>
            <ProjectFilter
              setFiltered={setFiltered}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              projects={projects}
            />
            <ProjectCard />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {filtered.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard />
              ))}
            </div>

            {visibleProjects < filtered.length && (
              <div className="text-center mt-4">
                <button
                  className="bg-purple-500 py-2 px-4 rounded-md font-bold mt-10"
                  onClick={loadMoreProjects}
                  aria-label="Show More Projects"
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
