import { createClient } from "@/lib/supabase";
import { IProject } from "@/types/Jobs";

const getProjectsData = async (slug: string): Promise<IProject> => {
  const supabase = await createClient();

  const { data } = await supabase
    .from("jobs")
    .select("*, projects(*)", { count: "exact" })
    .eq("slug", slug)
    .maybeSingle();

  return data;
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getProjectsData(slug);
  return {
    title: data?.title || "Project Detail",
    openGraph: {
      title: data?.title || "Project Detail",
      images: data.job_thumbnail,
    },
  };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = await getProjectsData(slug);

  return <ProjectDetaiContent content={projectData.} />;
}
