import React from "react";

export default function Profile() {
  return (
    <div className="flex items-center flex-col lg:flex-row text-white p-3 md:p-8 lg:p-16 rounded-xl">
      {/* Right Section: Image */}
      <div className="order-1 lg:order-2 mb-8 md:mt-0 w-1/2 flex justify-center">
        <div className="relative w-40 h-40 sm:w-60 sm:h-60  md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-r from-green-300 to-green-500">
          <img
            src="/profile.jpg"
            alt="Jericho"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Left Section */}
      <div className="order-2 lg:order-1 mt-4 lg:w-1/2 space-y-6 lg:pl-16">
        <h1 className="text-3xl lg:text-5xl md:text-6xl text-center md:text-left lg:text-left font-bold">
          Hi, I'm{" "}
          <span
            className="font-bold text-transparent bg-clip-text 
        animate-gradient-move bg-gradient-to-r 
        from-purple-500 via-blue-400 to-purple-500 
        bg-[length:200%_200%]"
          >
            Jericho
          </span>
        </h1>
        <p className="text-gray-400 text-md lg:text-lg text-center md:text-left lg:text-left leading-loose lg:leading-loose">
          As a{" "}
          <span className="font-bold text-white">
            4th-year Computer Science student
          </span>{" "}
          with a strong interest in{" "}
          <span className="font-bold text-white">Full-Stack Development</span>,
          I specialize in creating scalable and dynamic web applications.
          Proficient in Next.js, React, and Express.js, I excel in developing
          seamless user interfaces and robust back-end solutions.
        </p>
        <div className="flex flex-col lg:flex-row justify-center md:justify-start lg:justify-start lg:space-x-6">
          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download="Millena_Jericho_CV"
            className="bg-white hover:bg-purple-600 text-black hover:text-white text-center font-medium py-3 px-6 rounded-full w-40 shadow-lg transition duration-300 self-center"
          >
            Download CV
          </a>
          {/* See Experiences Link */}
          <a
            href="/pages/exp"
            className="text-purple-400 hover:text-white duration-300 font-medium self-center py-4"
          >
            See experiences
          </a>
        </div>
      </div>
    </div>
  );
}
