import ProjectItem from "./_components/ProjectItem";

export const metadata = {
  title: "Projects",
  description: "My Projects Page",
};

export default function Projects() {
  return (
    <section className="flex flex-col gap-10 ">
      <div className="col-span-2  space-y-5">
        <h1 className="text-2xl">Work</h1>
        <span className="text-4xl font-bold">RECENT PROJECT</span>
      </div>
      <ProjectItem />
    </section>
  );
}
