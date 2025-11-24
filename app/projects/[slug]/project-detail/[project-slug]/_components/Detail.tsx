import parse from "html-react-parser";

export default function ProjectDetaiContent({ content }: { content: string }) {
  return (
    <section className="prose prose-invert max-w-4xl mx-auto py-20">
      {parse(content)}
    </section>
  );
}
