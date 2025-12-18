"use client";
import { animate, motion, type Variants } from "motion/react";

const skills = [
  {
    title: "Editor",
    desc: "Video editing, motion cut, short-form content cho TikTok / Reels",
    icon: "🎬",
    glow: "from-pink-500/30",
  },
  {
    title: "Designer",
    desc: "UI/UX, Web/App design, Figma, Design system",
    icon: "🎨",
    glow: "from-purple-500/30",
  },
  {
    title: "Marketing",
    desc: "Content strategy, social growth, branding, ads",
    icon: "📈",
    glow: "from-amber-500/30",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
  animate: {
    y: -8,
    scale: 1.03,
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -10,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  hover: {
    scale: 1.15,
    rotate: 6,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function ExpertiseSection() {
  return (
    <section className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 " />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] -z-10" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              relative group rounded-2xl p-6
              bg-gradient-to-br from-white/10 to-white/5
              backdrop-blur-xl
              border border-white/10
              overflow-hidden
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${skill.glow} to-transparent blur-2xl`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur text-2xl"
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
