import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Html, Head, Main, NextScript } from 'next/document';

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
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Direct script injection for the chatbot */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                if (!document.getElementById('root')) {
                  var root = d.createElement('div');
                  root.id = 'root';
                  root.style.position = 'fixed';  
                  root.style.bottom = '20px';     
                  root.style.right = '20px';      
                  root.style.zIndex = '9999';     
                  d.body.appendChild(root);
                }
                if (window.myChatWidget && typeof window.myChatWidget.load === 'function') {
                  window.myChatWidget.load({
                    assistantId: '5616eacc-1125-4faf-8ea5-89da1dca4e41',
                    apiKey: 'e8decef3-5def-452f-9525-8c70759bf246',
                  });
                }
              };
              v.src = "https://agentivehub.com/production.bundle.min.js";
              v.type = "text/javascript";
              s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
        }} />
        
        <NextScript />
      </body>
    </Html>
  );
}
