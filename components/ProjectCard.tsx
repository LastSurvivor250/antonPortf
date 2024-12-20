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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, // Każdy obrazek z odpowiednim linkiem
    {
      src: "/kamala1.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: "/kamala2.png",
      link: "https://job-hunt-ashen.vercel.app/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, // Każdy obrazek z odpowiednim linkiem
    {
      src: "/kamala.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: "/kamala.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, // Każdy obrazek z odpowiednim linkiem
    {
      src: "/kamala.png",
      link: "https://nowy-blog-git-branch2-lastsurvivor250s-projects.vercel.app/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    // Zmieniamy na stan dla każdego obrazka

    <div className="grid grid-cols-1 py-10 md:grid-cols-3 gap-4">
      {" "}
      {/* Zmienione na Grid z równym rozkładem */}
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-w-16 aspect-h-9 shadow-md cursor-pointer overflow-hidden"
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center w-full h-full">
              <Image
                src={image.src}
                layout="responsive" // Ustawiamy layout na responsive
                width={16} // Proporcje szerokości
                height={9} // Proporcje wysokości
                role="img"
                aria-label={`Antonio's Image ${index + 1}`}
                alt={`Antonio's Image ${index + 1}`}
                className=" md:justify-self-end max-md:w-96 w-full h-full object-cover"
              />
            </div>

            {hoveredIndex === index && ( // Wyświetla tylko dla odpowiedniego obrazka
              <div className="bg-purple-500/80 absolute top-0 left-0 w-full h-full flex justify-center items-center transition-opacity duration-500 opacity-100">
                <h3 className="text-center text-black text-2xl flex gap-1 items-center font-thin">
                  Checkout Project
                  <LiaExternalLinkAltSolid />
                </h3>
              </div>
            )}
          </a>
          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-gray-800">
              {image.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectCard;
