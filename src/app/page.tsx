import Image from "next/image";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />

      <Footer />
    </div>
    
  );
}
