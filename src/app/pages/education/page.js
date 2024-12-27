import React from "react";
import Navbar from "@/app/components/navbar";
import Education from "@/app/components/education";
import Footer from "@/app/components/footer";

export default function page() {
  return (
    <div className="bg-[#0a0a0a]">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="animate-slideInUp">
          <Education />
        </div>

        <Footer />
      </div>
    </div>
  );
}
