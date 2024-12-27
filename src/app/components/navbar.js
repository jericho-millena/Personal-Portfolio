"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Navbar() {
  return (
    <div className="p-4">
      <nav className="bg-zinc-900 text-purple-400 rounded-full max-w-screen-md mx-auto shadow-lg">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 lg:px-14 lg:space-x-16">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            className="w-full flex items-center"
          >
            {/* Navigation Links */}
            <SwiperSlide className="!w-auto">
              <Link
                href="/pages/home"
                className="hover:text-white duration-300 text-lg font-medium lg:px-2"
              >
                home
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
              <Link
                href="/pages/exp"
                className="hover:text-white duration-300 text-lg font-medium lg:px-2"
              >
                experience
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
              <Link
                href="/pages/education"
                className="hover:text-white duration-300 text-lg font-medium lg:px-2"
              >
                education
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
              <Link
                href="/pages/projects"
                className="hover:text-white duration-300 text-lg font-medium lg:px-2"
              >
                projects
              </Link>
            </SwiperSlide>
          </Swiper>

          {/* Right Section: Icons */}
          <div className="flex items-center px-4 space-x-4">
            <Link
              href="https://github.com/jericho-millena"
              className="hover:text-purple-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 30 30"
                className="text-purple-400 fill-current hover:text-white duration-300"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/jerichomillena/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 50 50"
                className="text-purple-400 fill-current hover:text-white duration-300"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </Link>
            <Link
              href="mailto:millenajerichojames@gmail.com"
              className="hover:text-purple-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 50 50"
                className="text-purple-400 fill-current hover:text-white duration-300"
              >
                <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
