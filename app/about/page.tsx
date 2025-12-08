export const dynamic = "force-dynamic";
import { createClient } from "@/lib/supabase";
import { IAbout } from "@/types/About";
import { IExperience } from "@/types/Experience";
import { IHome } from "@/types/Home";
import BasicInfomation from "./_components/BasicInfomation";
import Experience from "./_components/Experience";
import Introduce from "./_components/Introduce";

const supabase = createClient();

export const metadata = {
  title: "About Me",
  description: "This is the about page",
};

const getHomeData = async (): Promise<IHome> => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", process.env.NEXT_USER_ID!)
    .single();

  return data;
};

const getExperienceData = async (): Promise<IExperience[] | null> => {
  const { data } = await supabase.from("experiences").select("*");

  return data;
};

const getAboutData = async (): Promise<IAbout> => {
  const { data } = await supabase.from("about").select("*").single();
  return data;
};
export default async function About() {
  const [homeData, experienceData, aboutData] = await Promise.all([
    getHomeData(),
    getExperienceData(),
    getAboutData(),
  ]);

  return (
    <section className="flex flex-col h-svh">
      <div className="lg:p-20 p-10 grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Introduce data={homeData} />
        <BasicInfomation infomationData={homeData} aboutData={aboutData} />
      </div>
      <Experience experienceData={experienceData} />
    </section>
  );
}
