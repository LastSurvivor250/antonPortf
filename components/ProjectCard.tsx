"use client";
//import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const ProjectCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="shadow-md cursor-pointer relative"
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div className="flex flex-1 pb-60px justify-end max-md:order-1 max-md:mb-3">
        <Image
          src={"/kamala.png"}
          width={250}
          height={250}
          role="img"
          aria-label="Antonio's Image"
          alt="Antonio's Image"
          className="md:justify-self-end max-md:w-96"
        />
        <Image
          src={"/kamala.png"}
          width={250}
          height={250}
          role="img"
          aria-label="Antonio's Image"
          alt="Antonio's Image"
          className="md:justify-self-end max-md:w-96"
        />
        <Image
          src={"/kamala.png"}
          width={250}
          height={250}
          role="img"
          aria-label="Antonio's Image"
          alt="Antonio's Image"
          className="md:justify-self-end max-md:w-96"
        />
      </div>

      {isHovered && (
        <a href="/#" target="_blank">
          <div className="bg-purple-500/80 py-1 px-3 absolute w-full h-full top-0 flex justify-center items-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            <h3 className="text-center text-black text-2xl flex gap-1 items-center font-thin">
              Checkout Project
              <LiaExternalLinkAltSolid />
            </h3>
          </div>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
