"use client";
import DownloadButton from "@/components/DownloadButton";
import { Quote } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const skills = [
  {
    title: "Designer",
    desc: "Landing pages, banners/posters, and branding assets.\nVisual, web, and UI/UX design.",
    icon: "🎨",
    glow: "from-purple-500/30",
  },
  {
    title: "Editor",
    desc: "Video editing for TikTok, Reels, and YouTube, etc.\nImage and document editing based on client needs.",
    icon: "🎬",
    glow: "from-pink-500/30",
  },
  {
    title: "Marketer",
    desc: "Recruitment and B2B marketing.\nBranding, content strategy, and lead generation.",
    icon: "📈",
    glow: "from-amber-500/30",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

export default function ExpertiseSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Nếu chưa mounted thì trả về section ẩn để tránh Layout Shift nhưng vẫn giữ cấu trúc
  if (!mounted) return <section className="opacity-0 py-10" />;

  return (
    <section className="relative  w-full mx-auto py-5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px]  -z-10" />

      {/* Header Section */}


      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} // Để 0.1 để hiện lên ngay khi vừa thấy mép
        className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative group rounded-3xl p-8 bg-white/3 backdrop-blur-2xl border border-white/10 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${skill.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-3xl shadow-inner">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{skill.title}</h3>
              <p className="text-zinc-400 leading-relaxed whitespace-pre-line">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}