import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chicago Tech & Startup Events",
  description:
    "The Top Tech & Startup Events in Chicago. Subscribe to CHI IRL to receive Weekly Events every Monday.",
  openGraph: {
    title: "Chicago Tech & Startup Events",
    description:
      "The Top Tech & Startup Events in Chicago. Subscribe to CHI IRL to receive Weekly Events every Monday.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
