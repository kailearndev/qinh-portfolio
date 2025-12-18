"use client";

import { ReactNode } from "react";
import Nav from "./Nav";
// import Footer from "./Footer";
import { ThemeProvider } from "../theme-provider";
import { StarsBackground } from "../animate-ui/components/backgrounds/stars";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <StarsBackground>
        <section className="flex h-svh relative">
          <Nav />

          <section className="flex-1 p-8 overflow-y-auto">{children}</section>
        </section>
      </StarsBackground>
    </ThemeProvider>
  );
}
