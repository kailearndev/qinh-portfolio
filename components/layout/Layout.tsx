"use client";

import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ThemeProvider } from "../theme-provider";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <section className="flex h-svh">
        <Nav />
        <AnimatePresence mode="wait">
          <motion.section
            key={pathname} // quan trọng để AnimatePresence detect route thay đổi
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 bg-white p-8 text-black overflow-y-auto"
          >
            {children}
          </motion.section>
        </AnimatePresence>
      </section>
    </ThemeProvider>
  );
}
