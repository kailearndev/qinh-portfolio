"use client";

import { Cursor, CursorFollow, CursorProvider } from "@/components/animate-ui/components/animate/cursor";
import { IJob } from "@/types/Jobs";
import { MoveRight } from "lucide-react";
import { motion, Variant } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// 1. Tách Variants ra ngoài cho sạch code
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98], // Cubic-bezier cho cảm giác mượt hơn
    },
  }),
} as any;

export default function ProjectItem({ data }: { data?: IJob[] | null }) {
  // Không cần state mounted nữa vì Framer Motion xử lý SSR khá tốt
  
  return (
    <CursorProvider>
      <Cursor />
      <section className="grid xl:grid-cols-2 gap-16 text-gray-200">
        {data?.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            whileHover={{ scale: 1.01 }}
            className="group flex lg:flex-row flex-col gap-8 cursor-pointer items-center"
          >
            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative w-full lg:w-[400px] h-[250px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                fill
                src={item.job_thumbnail || "/project-1.png"}
                alt={item.title}
                className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
              />
              
              {/* Light sweep overlay - mượt hơn với CSS transition */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </motion.div>

            {/* Text Content */}
            <Link href={`/projects/${item.slug}`} className="flex flex-1">
              <div className="flex flex-col gap-3 max-w-lg">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  {item.summary}
                </p>
                <h2 className="text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h2>

                <div className="flex items-center gap-1 text-gray-400 group-hover:text-amber-400 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">View project</span>
                  <MoveRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        <CursorFollow>View</CursorFollow>
      </section>
    </CursorProvider>
  );
}