"use client";

import { Download } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";

export default function DownloadButton({ cvUrl }: { cvUrl: string }) {
  const btnRef = useRef<HTMLDivElement>(null);

  // --- Logic Hiệu ứng Magnetic (Hút chuột) ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Giới hạn độ di chuyển trong khoảng 20px
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
      <motion.div
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        className="relative group"
      >
        {/* 1. Lớp viền sáng chạy (Animated Border Glow) */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600  rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>

        <Link
          download
          href={cvUrl || "/resume.pdf"}
          target="_blank"
          className="relative flex items-center gap-3 bg-white dark:bg-black/40 text-black dark:text-white px-8 py-4  rounded-2xl font-bold overflow-hidden"
        >
          {/* 2. Hiệu ứng vết sáng khi Hover qua nội dung (Shine effect) */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

          {/* 3. Icon Download với chuyển động nhún */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Download size={22} className="text-blue-500" />
          </motion.div>

          <span className="relative z-10 tracking-tight">Download My CV</span>

          {/* 4. Particle nhỏ trang trí (Tùy chọn) */}
          <div className="absolute right-3 top-3 w-1 h-1 bg-purple-400  rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
        </Link>
      </motion.div>
    </div>
  );
}
