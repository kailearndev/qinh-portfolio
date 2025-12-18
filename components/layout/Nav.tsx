"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
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
  const year = new Date().getFullYear();
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
                  "relative md:text-2xl uppercase tracking-wider transition-all duration-300 ease-in-out",
                  active
                    ? "text-transparent bg-clip-text bg-linear-to-r from-[#ce5be6] to-[#475bf1] font-bold "
                    : "text-gray-200 hover:text-white hover:font-semibold"
                )}
              >
                {item.name}

                {/* 🩶 gạch giữa text */}
                <AnimatePresence mode="wait">
                  {active && (
                    <motion.svg
                      key={path} // 🔥 quan trọng: đổi route là animate lại
                      width="20"
                      height="32"
                      viewBox="0 0 20 32"
                      className="absolute -left-21 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10 origin-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.path
                        d="
          M 4 18
          C 18 10, 34 26, 52 18
          C 70 10, 86 26, 104 18
          C 118 14, 130 20, 136 18
        "
                        fill="none"
                        stroke="url(#brush)"
                        strokeWidth={3.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="1.2 0.8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />

                      <defs>
                        <linearGradient
                          id="brush"
                          x1="0"
                          y1="0"
                          x2="140"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="text-center text-sm">
        &copy; {year} Quynh Portfolio. All rights reserved.
      </div>
    </nav>
  );
}
