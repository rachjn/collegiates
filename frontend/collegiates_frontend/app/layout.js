import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Collegiate Wushu",
  description: "Collegiate Wushu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/org5cfx.css" />
        <link rel="stylesheet" href="https://use.typekit.net/zao2vdq.css" />
      </head>
      <body
        className={`antialiased bg-off-white text-dark font-grotesk mx-24 my-2`}
      >
        <NavBar />
        <div className="mt-10">{children}</div>
      </body>
    </html>
  );
}
