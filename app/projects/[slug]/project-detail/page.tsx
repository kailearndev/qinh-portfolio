"use client";

import ClickSpark from "@/components/ClickSpark";
import { IProject } from "@/types/Jobs";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProjectDetail({ data }: { data: IProject }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log(data);

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {mounted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid md:grid-cols-2   items-center justify-center text-white  gap-10 py-20"
        >
          {/* Map toàn bộ mảng project */}
          {data.projects.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
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
                  src={item.thumnail_url || "/no-img.webp"}
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
                <span className="text-gray-400 mt-4">{item.short_detail}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  href={`/projects/${item.slug}/project-detail/${item.slug}`}
                  className="mt-4 inline-block px-6 py-3 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-black transition-colors duration-300"
                >
                  View Project
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3  items-center justify-center text-white  gap-4 py-20">
          {data.projects.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col items-center gap-8 max-w-3xl text-center"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  fill
                  src={item.thumnail_url}
                  alt={item.title}
                  className="object-cover rounded-2xl brightness-90 hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent blur-xl" />
              </div>

              <div className="max-w-2xl">
                <h1 className="text-3xl font-semibold text-amber-400">
                  {item.title}
                </h1>
                <span className="text-gray-400 mt-4">{item.short_detail}</span>
              </div>

              <div>
                <Link
                  href={`/projects/${item.slug}/project-detail/${item.slug}`}
                  className="mt-4 inline-block px-6 py-3 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-black transition-colors duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </ClickSpark>
  );
}
