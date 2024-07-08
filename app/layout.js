import { Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const arefRuqaa = Aref_Ruqaa({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
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
        <div className="min-h-screen bg-slate-50">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
