"use client";

import RotatingText from "@/components/RotatingText";
import { IHome } from "@/types/Home";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Introduce({ data }: { data: IHome }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <h1>Nice to meet you!</h1>
      <p className="uppercase md: text-4xl font-bold mt-2 mb-4">
        Welcome to my portfolio website.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center">
        <div>
          <Image
            src={data?.avatar_url || "/default-avatar.png"}
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="mt-6 text-4xl font-bold items-center gap-4 leading-8 flex justify-center">
            {data?.name || "Your Name"}
            <Link
              download
              target="_blank"
              href={data?.file_cv || "/resume.pdf"}
              className="flex xl:hidden gap-2 text-white animate-pulse "
            >
              <Download />
            </Link>
          </div>

          <RotatingText
            texts={
              data?.positions ? data?.positions.split(", ") : ["Your Position"]
            }
            mainClassName="px-2 sm:px-2 md:px-3  bg-transparent overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg mt-2 text-xl sm:text-2xl md:text-3xl font-semibold flex"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />

          <Link
            download
            href={data?.file_cv || "/resume.pdf"}
            target="_blank"
            className="hidden xl:flex gap-2   justify-center p-2 "
          >
            <Download size={20} className="animate-pulse" />
            <span>Download My CV</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
