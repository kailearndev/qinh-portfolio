"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ImageMotion({
  url,
  positions,
}: {
  url?: string;
  positions?: any;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textCircleRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation xuất hiện
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power4.out" }
      );

      // Vòng chữ xoay
      gsap.to(textCircleRef.current, {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPct = clientX / innerWidth - 0.5;
        const yPct = clientY / innerHeight - 0.5;

        // Giảm cường độ xoay trên màn hình nhỏ để tránh lỗi layout
        const intensity = innerWidth < 768 ? 15 : 40;

        gsap.to(imageWrapperRef.current, {
          rotateY: xPct * intensity,
          rotateX: -yPct * intensity,
          x: xPct * 20,
          y: yPct * 20,
          duration: 0.8,
          ease: "power2.out",
        });

        gsap.to(glowRef.current, {
          x: (clientX - innerWidth / 2) * 0.5,
          y: (clientY - innerHeight / 2) * 0.5,
          duration: 1.2,
          ease: "power3.out",
        });
      };

      // Chỉ kích hoạt MouseMove trên desktop để tiết kiệm pin/CPU mobile
      if (window.innerWidth > 1024) {
        window.addEventListener("mousemove", handleMouseMove);
      }

      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[50svh] md:h-[70svh] lg:h-screen overflow-hidden flex items-center justify-center bg-transparent"
      style={{ perspective: "1500px" }}
    >
      {/* LỚP 1: Hào quang (Glow) - Nhỏ hơn trên mobile */}
      <div
        ref={glowRef}
        className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      {/* LỚP 2: Vòng chữ xoay - Responsive kích thước */}
      <div
        ref={textCircleRef}
        className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] pointer-events-none opacity-20"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full font-sans fill-white"
        >
          <path
            id="circlePath"
            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            className="fill-none"
          />
          <text className="text-[9px] md:text-[10px] uppercase tracking-[6px] md:tracking-[8px] font-light">
            <textPath href="#circlePath">{positions}</textPath>
          </text>
        </svg>
      </div>

      {/* LỚP 3: Ảnh chính - Responsive kích thước */}
      <div
        ref={imageWrapperRef}
        className="relative z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={url || "/hero-image.png"}
          alt="Designer"
          fill
          className="object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)] md:drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          priority
          sizes="(max-width: 768px) 240px, (max-width: 1024px) 420px, 500px"
        />
      </div>

      {/* Hiệu ứng Floating Shapes - Ẩn bớt trên Mobile cho sạch sẽ */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-[20%] left-[10%] w-16 h-16 md:w-24 md:h-24 border border-white/5 rounded-full" />
        <div className="absolute bottom-[25%] right-[10%] w-24 h-24 md:w-32 md:h-32 border border-white/5 rounded-full" />
      </div>
    </div>
  );
}
