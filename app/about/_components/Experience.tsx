"use client";

import { IExperience } from "@/types/Experience";
import { motion } from "motion/react";

export default function Experience({
  experienceData,
}: {
  experienceData?: IExperience[] | null;
}) {
  return (
    <div className="md:mx-auto py-12 md:py-20 px-6">
      <div className="relative">
        <h1 className="text-3xl  md:text-5xl  font-bold mb-4">Experience </h1>
        {experienceData?.map((item, idx) => (
          <motion.div
            key={item.id}
            className="group relative flex flex-col gap-6 sm:flex-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-start">
              {/* Left Column */}
              <div className="mt-3 sm:mr-5 flex flex-col gap-2 shrink-0 w-full sm:w-[190px] text-left sm:text-end">
                <motion.h6
                  className="text-sm text-primary font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.company}
                </motion.h6>
                <motion.span
                  className="text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {item.duration}
                </motion.span>
              </div>

              {/* Timeline content */}
              <div className="relative pb-10 group-last:pb-4 space-y-2 sm:border-l-2 sm:pl-6 sm:pl-8">
                {/* Timeline Dot */}
                <motion.div
                  className="hidden sm:block absolute h-3 w-3 -translate-x-1/2 -left-px top-4 rounded-full border-2 border-primary bg-background"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.1 + 0.2,
                    ease: "backOut",
                  }}
                  viewport={{ once: true }}
                />

                {/* Title + Desc */}
                <h3 className="mt-2  md:text-lg font-semibold">
                  {item.position}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
