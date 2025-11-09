"use client";

import ClickSpark from "@/components/ClickSpark";
import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = [
    {
      slug: "dym-vietnam-logo-design",
      title: "INTERNAL BRANDING & CORPORATE DESIGN",
      desc: "DYM VIETNAM Logo Design",
      image: "/project-1.png",
    },
    {
      slug: "company-website-overhaul",
      title: "WEBSITE REDESIGN & DEVELOPMENT",
      desc: "Comprehensive overhaul of company website",
      image: "/project-1.png",
    },
  ];

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col gap-16 items-center justify-center text-white px-6 py-20"
      >
        {/* Map toàn bộ mảng project */}
        {project.map((item, idx) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
            className="flex flex-col items-center gap-8 max-w-3xl text-center"
          >
            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 0.5,
                boxShadow: "0px 0px 30px rgba(251,191,36,0.25)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                fill
                src={item.image}
                alt={item.title}
                className="object-cover rounded-2xl brightness-90 hover:brightness-110 transition-all duration-500"
              />

              {/* hiệu ứng quét ánh sáng */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent blur-xl"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl font-semibold text-amber-400">
                {item.title}
              </h1>
              <p className="text-gray-400 mt-4">{item.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </ClickSpark>
  );
}
