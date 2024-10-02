"use client";

const Bio = () => {
  return (
    <div id="projects" className="w-full h-fit py-10 relative bg-white">
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="flex justify-center">
          <span className="bg-purple-500 px-2 text-xl font-extrabold border uppercase rounded-md mt-4 mb-5">
            Bio
          </span>
        </div>
        <>
          <div className="mt-4 text-center mb-10">
            <p className="text-lg font-medium text-gray-800">
              <strong>Who am I?</strong> <p />
              <br /> A problem-solver at heart, blending the sharp skills of an
              anticorrosion engineer with the creative edge of a JavaScript and
              React developer.
              <br />
              <p /> <strong>But I don’t stop there</strong> <p />
              <br />
              I'm also a t-shirt designer with a flair for bold,
              thought-provoking visuals that get people talking.
              <br /> <p />
              <strong>My mission?</strong> <p />
              <br />
              To push boundaries, whether I’m coding clean, efficient web
              applications or creating designs that challenge the status quo.{" "}
              <br />
              <p />
              <strong> What sets me apart?</strong> <p />
              <br /> My diverse skill set. I’m not just an engineer. I’m also a
              YouTuber, building a channel to spark conversations about ADHD and
              mental health, inspiring resilience and growth. <br />
              <p />
              <strong> And did I mention?</strong> <p />
              <br />
              I'm into combat sports, fitness, and all things manga and
              anime—fueling my drive to always level up.
              <br /> <p />
              <strong>Ready to innovate?</strong> <p />
              <br /> Let’s make something unforgettable—whether it’s building
              software that works or designs that speak.
            </p>
          </div>
        </>
      </div>
    </div>
  );
};

export default Bio;
