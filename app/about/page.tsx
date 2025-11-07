import Image from "next/image";
import { Phone, Quote } from "lucide-react";
import Introduce from "./_components/Introduce";
import BasicInfomation from "./_components/BasicInfomation";
import Experience from "./_components/Experience";
export const metadata = {
  title: "About Me",
  description: "This is the about page",
};

export default function About() {
  return (
    <section className="flex flex-col h-svh">
      <div className="lg:p-20 p-10 grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Introduce />
        <BasicInfomation />
      </div>
      <Experience />
    </section>
  );
}
