"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function Nav() {
  const path = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  const menu = [
    { name: "Home", href: "/", id: 1 },
    { name: "About", href: "/about", id: 2 },
    { name: "Projects", href: "/projects", id: 3 },
    { name: "Contact", href: "/contact", id: 4 },
  ];

  return (
    <nav className="hidden p-8 w-60 lg:flex flex-col justify-between text-white">
      {/* Logo */}
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [1, 0.8, 1],
            filter: [
              "drop-shadow(0 0 5px rgba(251,191,36,0.3))",
              "drop-shadow(0 0 15px rgba(251,191,36,0.6))",
              "drop-shadow(0 0 5px rgba(251,191,36,0.3))",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-26 w-40 relative"
        >
          <Image
            priority
            src="/logo.png"
            alt="Logo"
            fill
            quality={100}
            className="object-contain"
          />
        </motion.div>

        {/* Menu */}
        <div className="flex flex-col gap-6">
          {menu.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={clsx(
                  "relative md:text-xl uppercase tracking-wider transition-all duration-300 ease-in-out",
                  active
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 font-semibold"
                    : "text-gray-400 hover:text-amber-200"
                )}
              >
                {item.name}

                {/* 🩶 gạch giữa text */}
                {active && (
                  <motion.span
                    layoutId={`midline-${item.id}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 top-1/2 w-12 h-[2px] -translate-y-1/2 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)] origin-center"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </nav>
  );
}
