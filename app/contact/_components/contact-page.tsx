"use client";

import logo from "@/public/contact.json";
import { IHome } from "@/types/Home";
import gsap from "gsap";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { SiFacebook, SiGmail, SiInstagram, SiLine, SiTiktok, SiX } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage({ aboutData }: { aboutData: IHome }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);
  const lottieRef = useRef(null);
  
  // 1. Thêm state để kiểm tra component đã mount hoàn toàn ở client chưa
  const [isMounted, setIsMounted] = useState(false);

  const footers = [
    { id: 1, name: "Facebook", href: aboutData?.facebook, icon: SiFacebook, color: "#1877F2", label: "Connect via Facebook" },
    { id: 2, name: "X", href: `${aboutData?.x}`, icon: SiX, color: "#000000", label: "Connect via X" },
    { id: 3, name: "Instagram", href: `${aboutData?.ig}`, icon: SiInstagram, color: "#E1306C", label: "Connect via Instagram" },
    { id: 4, name: "Line", href: `${aboutData?.line}`, icon: SiLine, color: "#22C55E", label: "Connect via Line" },
  ];

  useEffect(() => {
    setIsMounted(true); // Đánh dấu đã mount
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Chỉ chạy animation khi đã mount

    const ctx = gsap.context(() => {
      // Đảm bảo ban đầu các phần tử ẩn đi để tránh bị "nháy" nội dung trước khi chạy animation
      gsap.set([titleRef.current, cardsRef.current, lottieRef.current], { opacity: 0 });

      // 1. Tiêu đề
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        startAt: { y: 50 } // Set vị trí bắt đầu ngay trong câu lệnh animation
      });

      // 2. Lottie
      gsap.to(lottieRef.current, {
        opacity: 1,
        duration: 0.8,
      });
      
      gsap.to(lottieRef.current, {
        y: -15,
        rotation: 3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Cards nảy lên
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
        delay: 0.3,
        startAt: { y: 40 }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMounted]); // Chạy lại effect này khi isMounted thay đổi thành true

  // Hiệu ứng Hover
  const onMouseEnter = (index: number) => {
    if (!cardsRef.current[index]) return;
    gsap.to(cardsRef.current[index], {
      scale: 1.02,
      borderColor: "rgba(168, 85, 247, 0.5)",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      duration: 0.3,
    });
    const iconBox = cardsRef.current[index].querySelector(".icon-box");
    if (iconBox) {
      gsap.to(iconBox, { rotate: 12, scale: 1.2, duration: 0.3 });
    }
  };

  const onMouseLeave = (index: number) => {
    if (!cardsRef.current[index]) return;
    gsap.to(cardsRef.current[index], {
      scale: 1,
      borderColor: "rgba(255, 255, 255, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      duration: 0.3,
    });
    const iconBox = cardsRef.current[index].querySelector(".icon-box");
    if (iconBox) {
      gsap.to(iconBox, { rotate: 0, scale: 1, duration: 0.3 });
    }
  };

  // Nếu chưa mounted, render một div trống với kích thước tương đương để tránh nhảy Layout
  if (!isMounted) {
    return <div className="min-h-screen" />;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen py-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div ref={titleRef} className="space-y-4 opacity-0"> {/* Thêm opacity-0 ban đầu */}
            <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-widest uppercase">
              Get in touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
              Let’s create <br /> <span className="text-purple-500">Magic</span> together.
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
For project inquiries, please contact me at qncreative1795@gmail.com.
I am available for discussion in Japanese, English, or Vietnamese.            </p>
          </div>

          <div ref={lottieRef} className="w-full max-w-[280px] drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] opacity-0">
            <Lottie animationData={logo} loop />
          </div>
        </div>

        <div className="grid gap-4">
          {footers.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              className="group relative flex items-center justify-between p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all overflow-hidden opacity-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="icon-box p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                </div>
              </div>
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-[-4px]">
                 <ArrowUpRight className="text-white/50" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}