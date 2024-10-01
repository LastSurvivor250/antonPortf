"use client";
//import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const ProjectCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    {
      src: "/kamala.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
    }, // Każdy obrazek z odpowiednim linkiem
    {
      src: "/kamala1.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
    },
    {
      src: "/kamala2.png",
      link: "https://job-hunt-ashen.vercel.app/",
    }, // Każdy obrazek z odpowiednim linkiem
    {
      src: "/kamala.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
    },
    {
      src: "/kamala.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
    }, // Każdy obrazek z odpowiednim linkiem
    {
      src: "/kamala.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
    },
  ];
  return (
    // Zmieniamy na stan dla każdego obrazka

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {" "}
      {/* Zmienione na Grid z równym rozkładem */}
      {images.map((image, index) => (
        <div
          key={index}
          className="shadow-md cursor-pointer relative"
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center">
              <Image
                src={image.src}
                width={250}
                height={250}
                role="img"
                aria-label={`Antonio's Image ${index + 1}`}
                alt={`Antonio's Image ${index + 1}`}
                className="md:justify-self-end max-md:w-96"
              />
            </div>
          </a>

          {hoveredIndex === index && ( // Wyświetla tylko dla odpowiedniego obrazka
            <a href="/#" target="_blank">
              <div className="bg-purple-500/80 py-1 px-3 absolute w-full h-full top-0 flex justify-center items-center transition-opacity duration-500 opacity-100">
                <h3 className="text-center text-black text-2xl flex gap-1 items-center font-thin">
                  Checkout Project
                  <LiaExternalLinkAltSolid />
                </h3>
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
export default ProjectCard;
