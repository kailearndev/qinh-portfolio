"use client";
import CountUp from "@/components/CountUp";
import { Phone, Mail, MapPin, Globe, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function BasicInfomation() {
  const data = [
    { type: "Phone", value: "+84 123 456 789", icon: Phone },
    { type: "Email", value: "example@example.com", icon: Mail },
    { type: "Address", value: "123 Main St, City, Country", icon: MapPin },
    { type: "Website", value: "www.example.com", icon: Globe },
  ];
  const basicData = [
    {
      id: 1,
      experience: 5,
      title: "Years Experience...",
      description: "Expert in building scalable web applications",
    },
    {
      id: 2,
      experience: 50,
      title: "Clients Worldwide...",
      description:
        "Across Japan and Southeast Asia, delivering impactful designs and marketing content.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="flex flex-col justify-end gap-4 lg:mt-0 mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item) => (
          <div className="flex items-center gap-4" key={item.type}>
            <div className="bg-gray-200 p-2 rounded-full">
              <item.icon size={14} className="text-black " />
            </div>
            <p className="lg:text-lg">
              <strong>{item.type}:</strong> {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="border border-b border-b-black border-dotted" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {basicData.map((item) => (
          <div className="flex  gap-4" key={item.id}>
            <div>
              <h2 className="text-2xl font-bold ">
                <CountUp
                  from={0}
                  to={item.experience}
                  separator=","
                  direction="up"
                  delay={0.5}
                  duration={1}
                  className="count-up-text text-6xl text-red-300 font-extrabold"
                />{" "}
                {item.title}
              </h2>

              <div className="mt-2 lg:text-lg line-clamp-3">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black  p-4 flex justify-center  items-center gap-4 ">
        <Quote className="-rotate-180 " size={36} />
        <span className=" italic font-semibold rounded-2xl">
          “Driven by challenges, I find joy in pushing my limits and bringing
          ideas to life through design.”
        </span>
      </div>
    </motion.div>
  );
}
