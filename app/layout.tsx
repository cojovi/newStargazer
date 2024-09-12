import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Chatbot from "./Chatbot"; // Import the Chatbot client component

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
          <Chatbot /> {/* Render the Chatbot component */}
        </ThemeProvider>
      </body>
    </html>
  );
}
