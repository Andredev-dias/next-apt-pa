import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";

import { Menu } from "../components/menu";

const roboto = Roboto({
  weight: ["100", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Testando next",
  description: "Aplicação teste em Next.ts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Menu
          op1="batata"
          op2="batata2"
          op3="batata3"
          op4="batata5"
          op5="Axios"
        />
        {children}
        <footer>
          <h1>footer</h1>
        </footer>
      </body>
    </html>
  );
}
