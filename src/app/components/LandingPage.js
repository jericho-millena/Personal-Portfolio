"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [fadeOutJohnDoe, setFadeOutJohnDoe] = useState(false);
  const [fadeOutPortfolio, setFadeOutPortfolio] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const johnDoeTimeout = setTimeout(() => setFadeOutJohnDoe(true), 500); // Fade out "John Doe" after 2 seconds
    const portfolioTimeout = setTimeout(() => setFadeOutPortfolio(true), 2000); // Fade out "Personal Portfolio" after 4 seconds
    const navigateTimeout = setTimeout(() => router.push("/pages/home"), 2500); // Navigate after 4.5 seconds

    return () => {
      clearTimeout(johnDoeTimeout);
      clearTimeout(portfolioTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [router]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Inline Text: "John Doe Personal Portfolio" */}
      <h1 className="text-lg sm:text-2xl md:text-5xl lg:text-7xl text-white">
        <span
          className={`transition-opacity duration-500 ${
            fadeOutJohnDoe ? "opacity-0" : "opacity-100"
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
