import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css"
import Header from "@/componentes/layout/Header";
import Script from 'next/script'
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
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/favicon.png",
        href: "/favicon/favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/favicon-dark.png",
        href: "/favicon/favicon-dark.png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children, }: Readonly<{
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

        <Script id="ms-clarity" strategy="afterInteractive">
          {`
          (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ttvz06xfes");
          `}
        </Script>
      </body>


    </html>
  );
}
