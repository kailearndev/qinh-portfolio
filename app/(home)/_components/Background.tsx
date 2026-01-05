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
      // Animation xuất hiện: Hiện hình mượt mà không cần nền
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power4.out" }
      );

      // Vòng chữ xoay nhẹ nhàng
      gsap.to(textCircleRef.current, {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Hiệu ứng Parallax 3D
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPct = clientX / innerWidth - 0.5;
        const yPct = clientY / innerHeight - 0.5;

        gsap.to(imageWrapperRef.current, {
          rotateY: xPct * 40,
          rotateX: -yPct * 40,
          x: xPct * 20,
          y: yPct * 20,
          duration: 0.8,
          ease: "power2.out",
        });

        // Hào quang (Glow) di chuyển theo chuột để tạo ánh sáng động
        gsap.to(glowRef.current, {
          x: (clientX - innerWidth / 2) * 0.5,
          y: (clientY - innerHeight / 2) * 0.5,
          duration: 1.2,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[60svh] md:h-[80svh] overflow-hidden flex items-center justify-center bg-transparent"
      style={{ perspective: "1500px" }}
    >
      {/* LỚP 1: Hào quang tím xanh nhạt (Đã làm mờ và trong suốt hơn) */}
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* LỚP 2: Vòng chữ xoay (Chỉ giữ lại chữ trắng mảnh) */}
      <div
        ref={textCircleRef}
        className="absolute w-[380px] h-[380px] md:w-[600px] md:h-[600px] pointer-events-none opacity-20"
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
          <text className="text-[10px] uppercase tracking-[8px] font-light">
            <textPath href="#circlePath">{positions}</textPath>
          </text>
        </svg>
      </div>

      {/* LỚP 3: Ảnh chính (Đã bỏ mọi bg đen và card trang trí) */}
      <div
        ref={imageWrapperRef}
        className="relative z-10 w-[280px] h-[280px] md:w-[480px] md:h-[480px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={url || "/hero-image.png"}
          alt="Designer"
          fill
          className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          priority
        />
      </div>

      {/* Hiệu ứng Floating Shapes cực mảnh (Chỉ là những vòng tròn mảnh) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-24 h-24 border border-white/5 rounded-full" />
        <div className="absolute bottom-[30%] right-[15%] w-32 h-32 border border-white/5 rounded-full" />
      </div>
    </div>
  );
}
