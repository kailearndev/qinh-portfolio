"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function MobileMenu({ menu }: { menu: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  // Tự động đóng menu khi chuyển trang
  useEffect(() => setIsOpen(false), [path]);

  // Ngăn cuộn trang khi menu đang mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* 1. Header cố định phía trên */}
      <div className="fixed top-0 left-0 w-full h-20 px-6 flex items-center justify-between z-[100] bg-black/50 backdrop-blur-lg border-b border-white/5">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          <Image src={"/logo.png"} height={120} width={120} alt="logo-mobile" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 2. Lớp phủ Menu toàn màn hình */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[99] bg-black flex flex-col items-center justify-center p-8"
          >
            {/* Background trang trí cho menu */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-8">
              {menu.map((item, index) => {
                const active = path === item.href;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={clsx(
                        "text-4xl font-black uppercase tracking-tighter transition-all",
                        active
                          ? "text-white scale-110"
                          : "text-white/40 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                    {active && (
                      <motion.div
                        layoutId="underline"
                        className="h-1 w-full bg-purple-500 mt-2 rounded-full"
                      />
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
