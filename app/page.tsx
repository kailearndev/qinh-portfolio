import TrueFocus from "@/components/TrueFocus";
import Image from "next/image";
import { Suspense } from "react";
import ImageAnimation from "./(home)/_components/Background";
import Link from "next/link";
import StarBorder from "@/components/StarBorder";

export const metadata = {
  title: "Hello I'm ",
  description: "This is the home page",
};

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row w-full h-full lg:p-20">
      <div className="flex flex-col w-full md:w-1/2 justify-center items-start p-8">
        <div className=" text-3xl md:text-6xl font-semibold  mb-4">
          Hello I'm
        </div>
        <div className=" text-3xl md:text-6xl font-bold mb-4">
          NGUYEN VU LUAN
        </div>
        <div className=" rounded-lg md:text-4xl text-3xl font-medium mb-8">
          <TrueFocus
            sentence="Marketing executive Project manager Designer"
            borderColor="orange"
          />
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
        <ImageAnimation />
      </div>
    </section>
  );
}
