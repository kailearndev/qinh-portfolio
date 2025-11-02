import Image from "next/image";
import { Phone } from "lucide-react";
export const metadata = {
  title: "About Me",
  description: "This is the about page",
};

export default function About() {
  return (
    <section className="flex flex-col">
      <div className="lg:p-20 p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h1>Nice to meet you!</h1>
          <p className="uppercase md: text-4xl font-bold mt-2 mb-4">
            Welcome to my portfolio website.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src={"/about.png"}
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className="mt-6 text-4xl font-bold leading-8 flex justify-center bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                NGUYEN VU LUAN
              </div>
              <div className="mt-2 lg:text-lg leading-8 flex">
                Marketing Executive Project Manager Designer Designer
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-4 lg:mt-0 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <Phone size={12} />
              </div>
              <p>
                <strong>Phone:</strong> +84 123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
