export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase";
import { IJob } from "@/types/Jobs";
import { Metadata } from "next";
import ProjectItem from "./_components/ProjectItem";

const supabase = await createClient();

const getProjectsData = async (): Promise<IJob[] | null> => {
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .order("id", { ascending: false });
  return data;
};

export const metadata: Metadata = {
  title: "Projects - Qinh Portfolio",
  description: "A showcase of my recent projects and works.",
  icons: {
    icon: "/favicon.ico",
  },
};
export default async function Projects() {
  const projectsData = await getProjectsData();

  return (
    <section className="flex flex-col gap-10 ">
      <div className="col-span-2  space-y-5">
        <h1 className="text-2xl">Work</h1>
        <span className="text-4xl font-bold">RECENT PROJECT</span>
      </div>
      <ProjectItem data={projectsData} />
    </section>
  );
}
