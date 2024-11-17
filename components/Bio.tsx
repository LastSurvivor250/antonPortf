"use client";
import Image from "next/image";

const Bio = () => {
  return (
    <div id="projects" className="w-full h-fit py-10 relative bg-[#87cbb9]">
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="flex justify-center">
          <span className="bg-purple-500 px-2 text-xl font-extrabold border uppercase rounded-md mt-4 mb-5">
            Bio
          </span>
        </div>
        <>
          <div className="mt-4 text-center mb-10">
            <p className="text-lg font-medium text-gray-800">
              <div className="relative flex justify-between max-w-[1400px] mx-auto items-center h-full w-[91%] max-md:flex-col">
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
              <div className="relative flex justify-between max-w-[1400px] mx-auto items-center h-full w-[91%] max-md:flex-col">
                <Image
                  src={"/desi.jpg"}
                  width={450}
                  height={450}
                  role="img"
                  aria-label="Antonio's Image"
                  alt="Antonio's Image"
                  className="md:justify-self-end max-md:w-96"
                />
                <div className="flex flex-col justify-center text-black flex-1 max-md:order-2 max-md:text-center">
                  <p /> <strong>But I don’t stop there</strong> <p />
                  <br />
                  I'm also a graphic designer with a flair <br /> for bold,
                  thought-provoking visuals that get people talking.
                  <p />
                </div>
              </div>
              <br /> <p />
              <strong>My mission?</strong> <p />
              <br />
              To push boundaries, whether I’m coding clean, efficient web
              applications or creating designs that challenge the status quo.{" "}
              <p />
              <br />
              <p />
              <strong> What sets me apart?</strong> <p />
              <br /> My diverse skill set. I’m not just a boring technology geek
              . I’m also an aspiring YouTuber with a passion to spark
              conversations about modern society, mental health, inspiring
              resilience in a crazy world, and personal growth.
              <p /> <br />
              <p />
              <strong> And did I mention?</strong> <p />
              <br />
              In the meantime, I truly combat sports, workouts and running.
              Healthy brain needs healthy body after all.
              <p />
              <br /> <p />
              <strong>Ready to collaborate? Have any questions?</strong> <p />
              <br /> I'm here to bring your ideas to life. Whether it's a
              complex software that actually works or stunning designs that
              speak volumes.Let’s make something unforgettable together.
            </p>
          </div>
        </>
      </div>
    </div>
  );
};

export default Bio;
