import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import SafeSeoProvider from "./components/SafeSeoProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SafeSeoProvider>{children}</SafeSeoProvider>
      </body>
    </html>
  );
}
