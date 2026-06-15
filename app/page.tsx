"use client";

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sandbox from "./components/Sandbox";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ElectricGrid from "./components/ElectricGrid";

export default function Home() {
  return (
    <div className="relative z-0 bg-zinc-950 text-zinc-100 min-h-screen flex flex-col antialiased">
      <ElectricGrid />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-radial-gradient -z-10 pointer-events-none" data-scroll data-scroll-speed="-0.3" />
      <div className="absolute top-[800px] right-1/4 w-[600px] h-[600px] bg-radial-gold -z-10 pointer-events-none" data-scroll data-scroll-speed="-0.15" />
      <div className="absolute bottom-[400px] left-1/3 w-[500px] h-[500px] bg-radial-gradient -z-10 pointer-events-none" data-scroll data-scroll-speed="-0.2" />

      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION WITH AI SIMULATOR */}
      <Hero />

      {/* CORE FEATURES GRID */}
      <Features />

      {/* CRM SANDBOX INTERACTIVE PLAYGROUND */}
      <Sandbox />

      {/* DETAILED SaaS PLAN & PRICING */}
      <Pricing />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* ACCORDION FAQ SECTION */}
      <Faq />

      {/* FOOTER & CTA SECTION */}
      <Footer />
    </div>
  );
}
