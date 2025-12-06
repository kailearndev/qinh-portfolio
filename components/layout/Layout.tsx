"use client";

import { ReactNode } from "react";
import Nav from "./Nav";
// import Footer from "./Footer";
import { ThemeProvider } from "../theme-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <section className="flex h-svh">
        <Nav />

        <section className="flex-1 p-8 overflow-y-auto">{children}</section>
      </section>
    </ThemeProvider>
  );
}
