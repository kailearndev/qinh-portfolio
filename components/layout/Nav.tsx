"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
export default function Nav() {
  const path = usePathname();
  const menu = [
    {
      name: "Home",
      href: "/",
      id: 1,
    },
    {
      name: "About",
      href: "/about",
      id: 2,
    },
    {
      name: "Projects",
      href: "/projects",
      id: 3,
    },
    {
      name: "Contact",
      href: "/contact",
      id: 4,
    },
  ];
  return (
    <nav className=" hidden   p-8 w-60 lg:flex flex-col items-start  justify-between text-white">
      <div className="flex flex-col gap-10  ">
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
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-26 w-40 relative"
        >
          <Image
            preload
            src="/logo.png"
            alt="Logo"
            fill
            quality={100}
            className="object-contain"
          />
        </motion.div>
        <div className="flex flex-col gap-4">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={clsx(
                "md:text-xl uppercase rotate-0  decoration-amber-400",
                {
                  "underline decoration-wavy font-bold rotate-3 decoration-amber-300 transition-all duration-300 ease-in-out":
                    path === item.href,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </nav>
  );
}
