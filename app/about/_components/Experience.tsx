"use client";

import CardSwap, { Card } from "@/components/CardSwap";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { motion } from "motion/react";

export default function Experience() {
  const data = [
    {
      title: "Design Team Leader / Project Leader / Event Leader",
      company: "DYM VIETNAM Co., Ltd.",
      duration: "2023 – Present",
      description:
        "Leading design & video teams, managing internal branding, recruitment campaigns, and creative projects for Japan market.",
    },
    {
      title: "Editor & Project Manager",
      company: "Green Sun Vietnam Co., Ltd.",
      duration: "2021 – 2023",
      description:
        "Managed Southeast Asia marketing videos for Japanese clients.",
    },
    {
      title: "Marketing Executive / Director Assistant",
      company: "Green Sun Vietnam Co., Ltd.",
      duration: "2019 – 2021",
      description:
        "Supported communication, sales materials, and corporate branding projects.",
    },
  ];
  return (
    <div className="md:mx-auto py-12 md:py-20 px-6">
      <div className="relative">
        <h1 className="text-5xl  font-bold mb-4">Experience </h1>
        {data.map(({ title, description, duration, company }, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1, // từng item trễ nhẹ
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-start">
              {/* Left Column */}
              <div className="mt-3 mr-5 flex flex-col gap-2 shrink-0 w-[175px] sm:w-[190px] text-end">
                <motion.h6
                  className="text-sm text-primary font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {company}
                </motion.h6>
                <motion.span
                  className="text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {duration}
                </motion.span>
              </div>

              {/* Timeline content */}
              <div className="relative pb-10 border-l-2 group-last:pb-4 pl-6 sm:pl-8 space-y-2">
                {/* Timeline Dot */}
                <motion.div
                  className="absolute h-3 w-3 -translate-x-1/2 -left-px top-4 rounded-full border-2 border-primary bg-background"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.2,
                    ease: "backOut",
                  }}
                  viewport={{ once: true }}
                />

                {/* Title + Desc */}
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
