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
  metadataBase: new URL("https://www.cocinasmmaj.com.mx"),
  title: {
    default: "MMAJ Cocinas Integrales",
    template: "%s | MMAJ Cocinas Integrales"
  },
  description: "Diseño y fabricación de cocinas integrales de alta gama en Guadalajara. Calidad, precisión y elegancia para tu hogar.",
  keywords: ["cocinas integrales", "guadalajara", "diseño de cocinas", "fabricación de cocinas", "cocinas de lujo", "mmaj"],
  authors: [{ name: "Alan Valdez" }],
  icons: {
    icon: [
      { url: "/favicon/favicon.png", type: "image/png" },
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.cocinasmmaj.com.mx",
    siteName: "MMAJ Cocinas Integrales",
    title: "MMAJ Cocinas Integrales | Diseño y Fabricación en Guadalajara",
    description: "Diseño y fabricación de cocinas integrales de alta gama. Calidad y tecnología para tu hogar.",
    images: [
      {
        url: "/home/features_1.webp", // Using a real home image for OG
        width: 1200,
        height: 630,
        alt: "MMAJ Cocinas Integrales Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMAJ Cocinas Integrales",
    description: "Diseño y fabricación de cocinas integrales de alta gama en Guadalajara.",
    images: ["/home/features_1.webp"],
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
