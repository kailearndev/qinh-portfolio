"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/public/loading.json";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}
