import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import AppWalletProvider from "@/components/app-wallet-provider";
import { NavBar } from "@/components/nav-bar";
import AppWalletProvider from "@/components/app-wallet-provider";

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
  title: "Evento",
  description: "Your own event management app",
  openGraph: {
    images: ["/main.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppWalletProvider>
          <NavBar />
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
