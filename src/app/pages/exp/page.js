import React from "react";
import Navbar from "@/app/components/navbar";
import Expproj from "@/app/components/expproj";
import ExpCard from "@/app/components/expcard";
import Footer from "@/app/components/footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="animate-slideInUp">
        <Expproj />
        <ExpCard />
        <Footer />
      </div>
    </div>
  );
}
