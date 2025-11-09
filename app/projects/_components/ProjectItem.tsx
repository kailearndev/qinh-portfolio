"use client";

import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function ProjectItem() {
  const data = [
    {
      id: 1,
      title: "INTERNAL BRANDING & CORPORATE DESIGN",
      description: "DYM VIETNAM Logo Design",
      imageUrl: "/project-1.png",
      slug: "dym-vietnam-logo-design",
    },
    {
      id: 2,
      title: "WEBSITE REDESIGN & DEVELOPMENT",
      description: "Company Website Overhaul",
      imageUrl: "/project-1.png",
      slug: "company-website-overhaul",
    },
  ];

  return (
    <section className="grid xl:grid-cols-2 gap-16 py-20 text-gray-200">
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            scale: 1.03,
          }}
          className="group flex lg:flex-row flex-col gap-8 cursor-pointer items-center"
        >
          {/* Image */}
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
              boxShadow: "0px 0px 30px rgba(251,191,36,0.25)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full lg:w-[400px] h-[250px] rounded-2xl overflow-hidden"
          >
            <Image
              fill
              src={item.imageUrl}
              alt={item.title}
              className="object-cover rounded-2xl brightness-90 group-hover:brightness-110 transition-all duration-500"
            />

            {/* light sweep overlay */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "150%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent blur-xl"
            />
          </motion.div>

          {/* Text */}
          <Link href={`/projects/${item.slug}`} className="flex">
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 max-w-lg"
            >
              <p className="text-sm uppercase tracking-wider text-gray-400">
                {item.description}
              </p>
              <h2 className="text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                {item.title}
              </h2>

              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center gap-1 text-gray-400 group-hover:text-amber-400"
              >
                <span className="text-sm font-medium">View project</span>
                <MoveRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
