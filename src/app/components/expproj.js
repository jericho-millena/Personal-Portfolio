import React from "react";

export default function Expproj() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white p-6 space-y-6">
      {/* Text Section */}
      <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
        &lt; Here, you can know me a little more and learn about my
        <br />
        journey as a{" "}
        <span className="font-semibold text-white">
          Computer Science student
        </span>
        ,
        <br />
        with a strong interest in pursuing{" "}
        <span className="font-semibold text-white">Full-Stack Development</span>
        . /&gt;
      </p>

      {/* Button Section */}
      <a
        href="/Personal-Portfolio/cv.pdf"
        download="Millena_Jericho_CV"
        className="bg-white text-black font-medium py-3 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white hover:shadow-lg transition duration-300"
      >
        Download CV
      </a>
    </div>
  );
}
