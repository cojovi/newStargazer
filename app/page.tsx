"use client";

import { useEffect } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  // Add the chatbot script using useEffect for the homepage only
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://agentivehub.com/production.bundle.min.js";
    script.async = true;
    script.onload = () => {
      if (window.myChatWidget && typeof window.myChatWidget.load === "function") {
        window.myChatWidget.load({
          assistantId: "5616eacc-1125-4faf-8ea5-89da1dca4e41",
          apiKey: "e8decef3-5def-452f-9525-8c70759bf246",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main className="relative bg-black">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <Approach />
      <Clients />
      <Experience />
      <RecentProjects />
      <Footer />
    </main>
  );
};

export default Home;
