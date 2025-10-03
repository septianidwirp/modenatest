import Image from "next/image";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import Products from "./components/Products";
import HowToSubs from "./components/HowToSubs";
import Contact from "./components/Contact";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Subscribe />
      <Products />
      <HowToSubs />
      <Contact />
      <CTASection />
      <FAQSection />

      <Footer />
    </div>
    
  );
}
