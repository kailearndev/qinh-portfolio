"use client";

import { ReactNode } from "react";
import Nav from "./Nav";
// import Footer from "./Footer";
import { StarsBackground } from "../animate-ui/components/backgrounds/stars";
import { ThemeProvider } from "../theme-provider";

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

          <section className="flex-1 p-8 overflow-y-auto mt-20 lg:mt-0">
            {children}
          </section>
        </section>
      </StarsBackground>
    </ThemeProvider>
  );
}
