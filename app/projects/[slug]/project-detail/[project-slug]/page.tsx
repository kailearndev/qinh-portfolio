import { createClient } from "@/lib/supabase";
import { IProjectItem } from "@/types/Jobs";
import ProjectDetaiContent from "./_components/Detail";

const getProjectsData = async (slug: string): Promise<IProjectItem> => {
  const supabase = await createClient();

  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  return data;
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ "project-slug": string }>;
}) {
  const { "project-slug": slug } = await params;
  const projectData = await getProjectsData(slug);

  return <ProjectDetaiContent content={projectData.detail} />;
}
