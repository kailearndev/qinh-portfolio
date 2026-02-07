"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileNav";

export default function Nav() {
  const path = usePathname();
  const menu = [
    { name: "Home", href: "/", id: 1 },
    { name: "About", href: "/about", id: 2 },
    { name: "Projects", href: "/projects", id: 3 },
    { name: "Contact", href: "/contact", id: 4 },
  ];

  return (
    <>
      {/* Gọi MobileMenu riêng - Chỉ hiện trên mobile */}
      <MobileMenu menu={menu} />

      {/* Nav Desktop - Chỉ hiện trên lg:flex */}
      <nav className="hidden lg:flex flex-col justify-between p-8 w-64 h-screen border-r border-white/5 text-white sticky top-0">
        <div className="space-y-12">
          <div className="w-32 h-20 relative">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            {menu.map((item) => {
              const active = path === item.href || (item.href !== "/" && path.startsWith(item.href));
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={clsx(
                    "text-xl uppercase font-bold tracking-widest transition-all hover:translate-x-2",
                    active ? "text-purple-500" : "text-gray-400"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-xs text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Quynh Portfolio
        </div>
      </nav>
    </>
  );
}
