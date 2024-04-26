import type { Metadata } from "next";
import "./globals.css";
import { relative } from "path";
import { Footer, Navbar } from "@/components";



export const metadata: Metadata = {
  title: "DriveDiscovery",
  description: "Discover the best car ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
