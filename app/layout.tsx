import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Quỳnh's Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage_grotesque.className} bg-linear-to-l from-[#07051a] 
  via-[#2a1f5c]
  to-[#4b3a8f]`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
