import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Radhe Radhe Om Shanti Shivbaba Maa Shukriya",
  description: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
