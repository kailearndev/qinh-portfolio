import { createClient } from "@/lib/supabase";
import ContactPage from "./_components/contact-page";
import { IHome } from "@/types/Home";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata() {
  return {
    title: "Contact - Work with Quỳnh",
    description: "Get in touch with me through the contact page.",
  };
}

export default async function Contact() {
  const supabase = await createClient();
  const { data } = await supabase.from("users").select("*").single<IHome>();
  if (!data) {
    return <p>No data found.</p>;
  }
  return (
    <section>
      <ContactPage aboutData={data} />
    </section>
  );
}
