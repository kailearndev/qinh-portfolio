"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ImageMotion() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1], // ease-in-out custom
        }}
        className="relative w-full h-full"
      >
        <Image
          fill
          src="/bg.png"
          alt="Hero"
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
