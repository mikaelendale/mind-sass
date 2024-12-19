import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins", 
  subsets: ["latin"],        
  weight: ["400", "600", "700"], 
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})



export const metadata: Metadata = {
  title: "Studmind.ai",
  description: "AI-powered SaaS platform designed for high school and college students to enhance their learning experience. Generate flashcards, create interactive mind maps, practice with mock exams and questions, and transform your uploaded study materials into personalized podcasts. Unlock smarter, faster learning with StudMind.ai!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
