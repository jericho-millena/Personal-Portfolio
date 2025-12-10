"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [fadeOutProfile, setFadeOutProfile] = useState(false);
  const [fadeOutPortfolio, setFadeOutPortfolio] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const profileTimeout = setTimeout(() => setFadeOutProfile(true), 500);
    const portfolioTimeout = setTimeout(() => setFadeOutPortfolio(true), 2000);
    const navigateTimeout = setTimeout(() => router.push("/pages/home"), 2500);

    return () => {
      clearTimeout(profileTimeout);
      clearTimeout(portfolioTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [router]);

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <h1 className="text-md sm:text-lg md:text-lg lg:text-2xl text-white">
        <span
          className={`transition-opacity duration-500 ${
            fadeOutProfile ? "opacity-0" : "opacity-100"
          }`}
        >
          Jericho Millena
        </span>{" "}
        <span
          className={`transition-opacity font-bold duration-500 ${
            fadeOutPortfolio ? "opacity-0" : "opacity-100"
          }`}
        >
          Personal Portfolio
        </span>
      </h1>
    </div>
  );
}
