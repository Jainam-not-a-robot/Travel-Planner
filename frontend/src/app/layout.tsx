import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context_selectedPlace"
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Planner",
  description: "Want information about Tourist Destinations?",
  icons: {
    icon: "/tp-logo.png", // your png logo path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full flex bg-gradient-to-b from-white to-[#BADFDB]  antialiased`}
      >
        <UserProvider>

          <main className="flex-1 min-h-screen overflow-auto p-4">
            {/* <SidebarTrigger /> */}
            {children}
          </main>

        </UserProvider>
      </body>
    </html>
    </>
  );
}
