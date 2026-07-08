import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creatora - Fund your creators",
  description: "This site is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative overflow-x-hidden`}
      >
        {/* Soft Mesh Gradient & Grid Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#f8f9ff]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_0%,#e9d5ff,transparent)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_100%,#c7d2fe,transparent)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_600px_at_50%_50%,#fbcfe8,transparent)] opacity-40"></div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <Navbar />
        {/* Adjusted padding to center the hero section perfectly */}
        <main className="flex-grow flex items-center justify-center pt-4 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}