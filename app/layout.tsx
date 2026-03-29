import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merna Adel - Full Stack Engineer",
  description: "Portfolio showcasing projects built with MERN stack and modern web technologies",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "MongoDB", "Portfolio"],
  authors: [{ name: "Merna Adel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-900 selection:bg-cyan-300/20 selection:text-cyan-100">{children}</body>
    </html>
  );
}
