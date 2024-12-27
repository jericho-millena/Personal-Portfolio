"use client";

import React from "react";
import Profile from "@/app/components/profile";
import NavBar from "@/app/components/navbar";
import Exp from "@/app/components/exp";
import Fworks from "@/app/components/fworks";
import { useInView } from "@/app/hooks/useInView";

export default function Home() {
  const [expRef, isExpVisible] = useInView(0.2);
  const [fworksRef, isFworksVisible] = useInView(0.2);

  return (
    <div className="bg-[#0a0a0a]">
      <div>
        <NavBar />
      </div>
      <div className="animate-fade-in">
        <div className="animate-slideInUp">
          <Profile />
        </div>
        <div
          ref={expRef}
          className={`transition-all duration-700 ${
            isExpVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Exp />
        </div>
        <div
          ref={fworksRef}
          className={`transition-all duration-700 ${
            isFworksVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Fworks />
        </div>
      </div>
    </div>
  );
}
