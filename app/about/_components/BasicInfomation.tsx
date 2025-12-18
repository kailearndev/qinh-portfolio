"use client";

import { useEffect, useState } from "react";
import CountUp from "@/components/CountUp";
import { IAbout } from "@/types/About";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
function TypingText({ text, speed = 35 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayed}</>;
}

export default function BasicInfomation({ aboutData }: { aboutData: IAbout }) {
  const basicData = [
    {
      id: 1,
      experience: aboutData.works_experienced,
      title: "Years Experience...",
      description: aboutData.works_description,
    },
    {
      id: 2,
      experience: aboutData.client_worked,
      title: "Clients Worldwide...",
      description: aboutData.client_description,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="flex flex-col justify-end gap-6 lg:mt-0 mt-8"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {basicData.map((item) => (
          <div key={item.id}>
            <h2 className="text-2xl font-bold">
              <CountUp
                from={0}
                to={Number(item.experience) || 0}
                separator=","
                direction="up"
                delay={0.5}
                duration={1}
                className="text-6xl text-red-300 font-extrabold"
              />{" "}
              {item.title}
            </h2>

            <p className="mt-2 lg:text-lg line-clamp-3">
              {item.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>
          </div>
        ))}
      </div>

      {/* Quote + Typing slogan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="
          relative mt-6 flex items-start gap-4 p-5
          rounded-2xl
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl
          border border-white/10
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -inset-1 bg-purple-500/20 blur-2xl" />
        </div>

        {/* Quote icon animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -6, 0],
          }}
          transition={{
            duration: 0.5,
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
        >
          <Quote className="-rotate-180 text-purple-300" size={36} />
        </motion.div>

        {/* Typing slogan */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            italic font-semibold leading-relaxed
            bg-gradient-to-r from-purple-300 via-white to-purple-300
            bg-[length:200%_100%]
            bg-clip-text text-transparent
            animate-[shimmer_3s_linear_infinite]
          "
        >
          “
          <TypingText
            text={
              aboutData.slogan ||
              "Driven by challenges, I find joy in pushing my limits and bringing ideas to life through design."
            }
          />
          ”
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
