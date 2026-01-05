"use client";

import logo from "@/public/contact.json";
import { IHome } from "@/types/Home";
import gsap from "gsap";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { SiFacebook, SiGmail, SiTiktok } from "react-icons/si";

export default function ContactPage({ aboutData }: { aboutData: IHome }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);
  const lottieRef = useRef(null);

  const footers = [
    {
      id: 1,
      name: "Facebook",
      href: aboutData?.facebook,
      icon: SiFacebook,
      color: "#1877F2",
    },
    {
      id: 2,
      name: "TikTok",
      href: `https://www.tiktok.com/${aboutData?.tiktok}`,
      icon: SiTiktok,
      color: "#000000",
    },
    {
      id: 3,
      name: "Phone",
      href: `tel:${aboutData?.phone}`,
      icon: MdPhoneInTalk,
      color: "#22C55E",
    },
    {
      id: 4,
      name: "Email",
      href: `mailto:${aboutData?.email}`,
      icon: SiGmail,
      color: "#EA4335",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hiệu ứng Tiêu đề rơi xuống và nảy
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "bounce.out",
      });

      // 2. Hiệu ứng Lottie bay bồng bềnh liên tục
      gsap.to(lottieRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // 3. Hiệu ứng các Card nảy lên lần lượt (Stagger)
      gsap.from(cardsRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)", // Tạo độ nảy khi hiện ra
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert(); // Dọn dẹp bộ nhớ khi unmount
  }, []);

  // Hàm xử lý hover bằng GSAP cho từng card
  const onMouseEnter = (index: number) => {
    gsap.to(cardsRef.current[index], {
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      backgroundColor: "rgba(168, 85, 247, 0.2)",
    });
  };

  const onMouseLeave = (index: number) => {
    gsap.to(cardsRef.current[index], {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.in",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-full space-y-10 pb-20 max-w-xl mx-auto lg:mt-20 mt-10 lg:px-0 px-4"
    >
      <div ref={titleRef}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Let’s Work Together
        </h1>
        <p className="text-gray-300 text-lg">I'm a passionate designer...</p>
      </div>

      <div ref={lottieRef} className="max-w-sm mx-auto">
        <Lottie animationData={logo} loop />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        {footers.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave(index)}
            className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <div className="p-2 rounded-lg bg-white/10">
              <item.icon size={26} style={{ color: item.color }} />
            </div>
            <span className="text-lg font-medium text-white">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
