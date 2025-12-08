export const dynamic = "force-dynamic";

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
    description: `Welcome to the personal website of ${homeData?.name}. Learn more about their work, projects, and interests.`,
    openGraph: {
      title: `Home - ${homeData?.name}`,
      description: `Welcome to the personal website of ${homeData?.name}. Learn more about their work, projects, and interests.`,
      images: [
        {
          url: homeData?.avatar_url,
          width: 800,
          height: 600,
          alt: `${homeData?.name}'s Avatar`,
        },
      ],
    },
  };
};
export default async function Home() {
  const homeData = await getHomeData();

  return (
    <section className="flex flex-col md:flex-row w-full h-full lg:p-20">
      <div className="flex flex-col w-full md:w-1/2 justify-center items-start p-8">
        <div className=" text-3xl md:text-6xl font-semibold  mb-4">
          Hello I'm
        </div>
        <div className=" text-3xl md:text-6xl font-bold mb-4">
          {homeData?.name}
        </div>
        <div className=" rounded-lg md:text-4xl text-3xl font-medium mb-8">
          <TrueFocus sentence={homeData?.positions} borderColor="orange" />
        </div>
        <Link href="/about" className="">
          <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="5s"
          >
            Learn more about me
          </StarBorder>
        </Link>
      </div>
      <div className="md:w-1/2 relative h-96 md:h-auto">
        <ImageAnimation url={homeData?.avatar_url} />
      </div>
    </section>
  );
}
