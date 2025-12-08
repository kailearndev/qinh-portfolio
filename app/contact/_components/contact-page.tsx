"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Lottie from "lottie-react";
import logo from "@/public/contact.json";
import { SiFacebook, SiMapillary, SiPhonepe, SiTiktok } from "react-icons/si";
import { IHome } from "@/types/Home";

export default function ContactPage({ aboutData }: { aboutData: IHome }) {
  const footers = [
    {
      id: 1,
      name: "Facebook",
      href: aboutData?.facebook || "https://www.facebook.com/yourprofile",
      icon: SiFacebook,
    },
    {
      id: 2,
      name: "TikTok",
      href:
        `https://www.tiktok.com/${aboutData?.tiktok || "yourprofile"}` ||
        "https://www.tiktok.com/@yourprofile",
      icon: SiTiktok,
    },
    {
      id: 3,
      name: "Phone",
      href: `tel:${aboutData?.phone || "123-456-7890"}`,
      icon: SiPhonepe,
    },
    {
      id: 4,
      name: "Email",
      href: `mailto:${aboutData?.email || "youremail@example.com"}`,
      icon: SiMapillary,
    },
  ];
  const { scrollYProgress } = useScroll();

  // Zoom animation cho Lottie khi scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div className="flex flex-col h-full space-y-10 pb-20 max-w-xl mx-auto lg:mt-20 mt-10 lg:px-0 px-4">
      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Let’s Work Together</h1>

        <p className="mb-6 text-gray-200 leading-relaxed text-lg">
          I'm a passionate designer who loves turning ideas into clean, elegant
          and meaningful visuals. Whether it's UI/UX, branding, or creative
          digital art — I’d be excited to collaborate and bring your vision to
          life.
        </p>

        <p className="mb-10 text-gray-400 leading-relaxed text-lg">
          Feel free to reach out using any of the channels below. I’m always
          open for conversations, feedback, and creative opportunities.
        </p>
        <motion.div
          style={{ scale, opacity }}
          className="overflow-hidden rounded-3xl shadow-lg max-w-sm  mx-auto "
        >
          <Lottie animationData={logo} loop />
        </motion.div>
        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col gap-4 p-5  rounded-2xl shadow-sm mt-20"
        >
          {footers.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3   rounded-lg hover:bg-purple-100 transition-colors duration-200 hover:text-black"
            >
              <item.icon size={24} className="text-purple-400" />
              <span className="text-lg font-medium">{item.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* LOTTIE ANIMATION - SCROLL ZOOM */}
    </div>
  );
}
