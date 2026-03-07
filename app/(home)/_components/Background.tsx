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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hiệu ứng xuất hiện (Fade & Scale)
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // 2. Vòng chữ xoay tròn đều
      gsap.to(textCircleRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // 3. Hiệu ứng nghiêng (Tilt) khi di chuyển chuột
      const handleMouseMove = (e: MouseEvent) => {
        if (!imageWrapperRef.current) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Tính toán độ nghiêng dựa trên vị trí chuột (tầm 15-20 độ là vừa đẹp)
        const xPct = clientX / innerWidth - 0.5;
        const yPct = clientY / innerHeight - 0.5;

        gsap.to(imageWrapperRef.current, {
          rotateY: xPct * 25,
          rotateX: -yPct * 25,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      // Chỉ kích hoạt trên Desktop
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
      className="relative w-full h-[60svh] md:h-screen flex items-center justify-center bg-transparent overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Vòng chữ xoay - Nằm dưới cùng */}
      <div
        ref={textCircleRef}
        className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] pointer-events-none opacity-15"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            className="fill-none"
          />
          <text className="text-[10px] uppercase tracking-[7px] font-medium">
            <textPath href="#circlePath">{positions}</textPath>
          </text>
        </svg>
      </div>

      {/* Cụm Ảnh & Glow - Di chuyển cùng nhau */}
      <div
        ref={imageWrapperRef}
        className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px] flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow (Hào quang) - Cố định phía sau ảnh */}
        <div 
          className="absolute inset-0 m-auto w-[70%] h-[70%] bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
          style={{ transform: "translateZ(-20px)" }}
        />

        {/* Ảnh chính */}
        <div className="relative w-full h-full">
          <Image
            src={url || "/hero-image.png"}
            alt="Hero"
            fill
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            priority
            sizes="(max-width: 768px) 280px, 480px"
          />
        </div>
      </div>
    </div>
  );
}