import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import SmartlookSnippet from "@/components/smartlook";
import Script from "next/script";


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
  title: "The Mom Tester: AI-Powered Idea Validation for Solopreneurs",
  description: "Validate your startup idea with AI-generated user interview questions. The Mom Tester helps solopreneurs and indie hackers avoid bias and get honest feedback fast.",
  // icons: [BroadcastChannel]



};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head >
      <SmartlookSnippet />
        <link rel="icon" href="https://iili.io/d8VvJRI.jpg" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}

      <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f577004fd56a44a3b44fefb0981c0211"}'/>
      </body>
    </html>
  );
}
