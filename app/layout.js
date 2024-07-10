import { Aref_Ruqaa } from "next/font/google";
import Image from "next/image";
import "./globals.css";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

const arefRuqaa = Aref_Ruqaa({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "دار الاصيل للكتب",
  description: "خير جليس في الأنام كتاب",
  openGraph: {
    title: "دار الاصيل للكتب",
    description: "خير جليس في الأنام كتاب",
    url: "https://www.darelaseel.com", // Replace with your actual website URL
    type: "website",
    images: [
      {
        url: "/images/logor.png", // Replace with your actual logo URL
        width: 800,
        height: 600,
        alt: "دار الاصيل للكتب Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arefRuqaa.className}>
        <Header />
        <div className="min-h-screen">
          <Image
            src="/images/logor.png"
            alt="logo"
            width={400}
            height={400}
            className="fixed top-1/2 left-1/2 opacity-10 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          />
          <div className="z-10">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
