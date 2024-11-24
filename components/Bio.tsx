"use client";
import Image from "next/image";
import React, { useState } from "react";

const Bio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  return (
    <div id="projects" className="w-full h-fit py-10 relative bg-black">
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="flex justify-center">
          <button
            onClick={toggleVisibility}
            className="bg-purple-500 px-2 text-xl font-extrabold border uppercase rounded-md mt-4 mb-5"
          >
            {isVisible ? "Hide Section" : "About Me"}
          </button>
        </div>
        <>
          {" "}
          {isVisible && (
            <div className="mt-4 text-center mb-10">
              <p className="text-lg font-medium text-gray-800">
                <div className="relative flex justify-between max-w-[1400px] bg-[#87cbb9]  bg-opacity-50  mx-auto items-center h-full w-[91%] max-md:flex-col">
                  <div className="flex flex-col justify-center text-black flex-1 max-md:order-2 max-md:text-center">
                    <strong>Who am I?</strong> <p className="max-w-[100px]" />
                    <br /> A problem-solver at heart, <br /> blending the sharp
                    skills of
                    <br />
                    an engineer with the creative edge of programming.
                    <p />
                  </div>
                  <Image
                    src={"/problem.png"}
                    width={450}
                    height={450}
                    role="img"
                    aria-label="Antonio's Image"
                    alt="Antonio's Image"
                    className="md:justify-self-end max-md:w-96"
                  />
                </div>
                <br />
                <div className="relative flex justify-between max-w-[1400px] mx-auto items-center bg-[#dca9cb] h-full w-[91%] max-md:flex-col">
                  <Image
                    src={"/desi.png"}
                    width={450}
                    height={450}
                    role="img"
                    aria-label="Antonio's Image"
                    alt="Antonio's Image"
                    className="md:justify-self-end max-md:w-96"
                  />
                  <div className="flex flex-col justify-center  text-black flex-1 max-md:order-2 max-md:text-center">
                    <p /> <strong>But I don’t stop there</strong> <p />
                    <br />
                    I'm also a graphic designer with a flair <br /> for bold,
                    thought-provoking visuals that get people talking.
                    <p />
                  </div>
                </div>
                <br /> <p />
                <div className="relative flex justify-between max-w-[1400px] bg-[#87cbb9] mx-auto items-center h-full w-[91%] max-md:flex-col">
                  <div className="flex flex-col justify-center text-black flex-1 max-md:order-2 max-md:text-center">
                    <strong>My Mission?</strong> <p className="max-w-[100px]" />
                    <br /> To push boundaries, whether I’m coding clean,
                    <br /> efficient web applications or creating designs that
                    challenge the status quo.
                    <p />
                  </div>
                  <Image
                    src={"/miss.png"}
                    width={450}
                    height={450}
                    role="img"
                    aria-label="Antonio's Image"
                    alt="Antonio's Image"
                    className="md:justify-self-end max-md:w-96"
                  />
                </div>
                <br />
                <div className="relative flex justify-between max-w-[1400px] mx-auto items-center bg-[#dca9cb] h-full w-[91%] max-md:flex-col">
                  <Image
                    src={"/yout.png"}
                    width={450}
                    height={450}
                    role="img"
                    aria-label="Antonio's Image"
                    alt="Antonio's Image"
                    className="md:justify-self-end max-md:w-96"
                  />
                  <div className="flex flex-col justify-center  text-black flex-1 max-md:order-2 max-md:text-center">
                    <p /> <strong>What sets me apart?</strong> <p />
                    <br />
                    My diverse skill set. I’m not just a boring technology geek
                    . <br />
                    I’m also an aspiring YouTuber with a passion to spark
                    <br />
                    conversations about modern society, mental health, inspiring
                    <br />
                    resilience in a crazy world, and personal growth.
                    <br />
                    <p />
                  </div>
                </div>
                <br />
                <div className="relative flex justify-between max-w-[1400px] bg-[#87cbb9] mx-auto items-center h-full w-[91%] max-md:flex-col">
                  <div className="flex flex-col justify-center text-black flex-1 max-md:order-2 max-md:text-center">
                    <strong>And did I mention?</strong>{" "}
                    <p className="max-w-[100px]" />
                    In the meantime, I truly combat sports, workouts and
                    running.
                    <br />
                    Healthy brain needs healthy body after all.
                    <p />
                  </div>
                  <Image
                    src={"/box.png"}
                    width={450}
                    height={450}
                    role="img"
                    aria-label="Antonio's Image"
                    alt="Antonio's Image"
                    className="md:justify-self-end max-md:w-96"
                  />
                </div>
                <br />
                <div className="relative flex justify-between max-w-[1400px] mx-auto items-center bg-black h-full w-[91%] max-md:flex-col">
                  <Image
                    src={"/teamup.png"}
                    width={450}
                    height={450}
                    role="img"
                    aria-label="Antonio's Image"
                    alt="Antonio's Image"
                    className="md:justify-self-end max-md:w-96"
                  />
                  <div className="flex flex-col justify-center  text-white  flex-1 max-md:order-2 max-md:text-center">
                    <p />{" "}
                    <strong>Ready to collaborate? Have any questions?</strong>{" "}
                    <p />
                    <br />
                    I'm here to bring your ideas to life. Whether it's a complex
                    <br />
                    software that actually works or stunning designs that speak
                    <br />
                    volumes.Let’s make something unforgettable together.
                    <br />
                    <br />
                    <p />
                  </div>
                </div>
              </p>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Bio;
