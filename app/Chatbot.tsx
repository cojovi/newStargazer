"use client"; // Ensure this is a Client Component

import { useEffect } from "react";

// Extend the global Window interface to recognize `myChatWidget`
declare global {
  interface Window {
    myChatWidget: {
      load: (config: { assistantId: string; apiKey: string }) => void;
    };
  }
}

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://agentivehub.com/production.bundle.min.js";
    script.async = true;
    script.onload = () => {
      if (window.myChatWidget) {
        window.myChatWidget.load({
          assistantId: "5616eacc-1125-4faf-8ea5-89da1dca4e41",
          apiKey: "e8decef3-5def-452f-9525-8c70759bf246",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chatbot;
