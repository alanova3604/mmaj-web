import type { Metadata } from "next";
import { Geist_Mono, Montserrat} from "next/font/google";
import "./globals.css"
import Header from "@/componentes/layout/Header";
import Footer from "@/componentes/layout/Footer";
import MotionWrapper from "@/componentes/animation/MotionWrapper";

const geistSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MMAJ Cocinas Integrales",
  description: "Cocinas Integrales en Guadalajara",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
      <div className="font-sans">
          <Header></Header>
          {children}
          <Footer></Footer>
      </div>
      </body>
    </html>
  );
}
