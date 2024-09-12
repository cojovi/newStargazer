// Mark this file as a Client Component
"use client"; 

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react"; // Import useEffect for chatbot script

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stargazer Project.xyz",
  description: "Exploring the Unseen, Creating the Unconventional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add the chatbot script using useEffect
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
