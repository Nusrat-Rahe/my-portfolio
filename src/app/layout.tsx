import "./globals.css";
import { ReactNode } from "react";
import ParticlesBackground from "../components/layout/ParticlesBackground";
import Navbar from "../components/layout/Navbar";

export const metadata = {
  title: "Nusrat Rahe | Portfolio",
  description: "Portfolio of Nusrat Jahan Rahe - focused on web development and user-friendly digital experiences.",
  // These tags are specifically for LinkedIn/Social Media sharing
  openGraph: {
    title: "Nusrat Jahan Rahe | Portfolio",
    siteName: "Nusrat Jahan Rahe Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Nusrat Jahan Rahe Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-background text-accent overflow-x-hidden antialiased">
        <Navbar />

        {/* Particle Background Layer */}
        <div className="fixed inset-0 -z-10">
           <ParticlesBackground />
        </div>

        
        <main className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
          {children}
        </main>

      </body>
    </html>
  );
}