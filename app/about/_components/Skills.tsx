"use client";
import DownloadButton from "@/components/DownloadButton";
import { motion, type Variants } from "motion/react";

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
      staggerChildren: 0.2, // Tăng nhẹ để thấy rõ hiệu ứng từng cái hiện ra
      delayChildren: 0.1 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 }, // Thêm scale nhẹ cho sinh động
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Quintic ease out: mượt và nhanh ở đầu, chậm về sau
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 } // Dùng spring cho icon cảm giác "nảy"
  }
};

export default function ExpertiseSection({
  slogan,
  cv,
}: {
  slogan?: string;
  cv?: string;
}) {
  return (
    <section className="relative max-w-7xl w-full mx-auto py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] -z-10" />

      <motion.div
        className="px-6 md:px-10 mb-16 max-w-5xl flex flex-col gap-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-5xl md:text-7xl text-blue-400 font-serif mr-2">"</span>
          {slogan}
          <span className="text-5xl md:text-7xl text-purple-500 font-serif ml-2">"</span>
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <DownloadButton cvUrl={cv || ""} />
        </motion.div>
      </motion.div>
      
      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // Chạy ngay khi 20% section vào màn hình
        className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              transition: { duration: 0.3, ease: "easeOut" } 
            }}
            className="relative group rounded-3xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/10 overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-3xl shadow-inner"
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                {skill.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors whitespace-pre-line">
                {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}