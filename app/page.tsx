export const dynamic = "force-dynamic";
export const revalidate = 5;

import StarBorder from "@/components/StarBorder";
import TrueFocus from "@/components/TrueFocus";
import { createClient } from "@/lib/supabase";
import { IHome } from "@/types/Home";
import { Metadata } from "next";
import Link from "next/link";
import ImageAnimation from "./(home)/_components/Background";



const getHomeData = async (): Promise<IHome> => {
  const supabase = createClient();
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", process.env.NEXT_USER_ID!)
    .single();

  return data;
};

export const generateMetadata = async (): Promise<Metadata> => {
  const homeData = await getHomeData();
  return {
    title: `Home - ${homeData?.name}`,
    description: `Welcome to the personal website of ${homeData?.name}.`,
    openGraph: {
      images: [{ url: homeData?.avatar_url || "" }],
    },
  };
};

export default async function Home() {
  const homeData = await getHomeData();

  return (
    // Sử dụng items-center để text và ảnh luôn cân đối theo trục dọc
    <section className="flex flex-col lg:flex-row w-full h-full  items-center justify-between">
      {/* TEXT SECTION: Chiếm 55% để text bay bổng hơn */}
      <div className="flex flex-col w-full lg:w-[55%] justify-center items-start p-6 md:p-12 z-20">
        <header className="space-y-2">
          <h1 className="text-4xl md:text-7xl font-light text-white leading-tight">
            Hello, I&apos;m <br />
            <span className="font-black bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
              {homeData?.name}
            </span>
          </h1>
        </header>

        {/* Cải thiện hiển thị Position */}
        <div className="mt-6 min-h-[60px] md:text-4xl text-2xl font-medium text-gray-400">
          <TrueFocus
            sentence={homeData?.positions || "Creative Designer"}
            borderColor="#ce5be6"
          />
        </div>

        <p className="mt-6 mb-10 text-gray-400 max-w-md leading-relaxed text-lg">
          Crafting digital experiences through clean code and aesthetic design.
          Based in Vietnam, working globally.
        </p>

        <Link href="/about">
          <StarBorder
            as="button"
            className="px-8 py-4 text-sm font-bold uppercase tracking-[0.2em]"
            color="cyan"
            speed="3s"
          >
            Explore My Work
          </StarBorder>
        </Link>
      </div>

      {/* IMAGE SECTION: Chiếm 45% */}
      <div className="w-full lg:w-[45%] h-[50vh] lg:h-full relative flex items-center justify-center">
        <ImageAnimation
          url={homeData?.avatar_url}
          // Chuyển positions vào nếu ImageAnimation cần hiển thị text phụ
        />
      </div>
    </section>
  );
}
