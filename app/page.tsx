import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";
import ParticlesBackground from "@/components/ParticlesBackground";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "project"] {
    name,
    image,
    url,
    category
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const projects = await getData();
  return (
    <>
      <Hero />
      <div>
        <ParticlesBackground />
        <div className="h-10">
          <Bio />
          <Portfolio projects={projects} />
          <Skills />
          <Testimonial />
        </div>
      </div>
      <Contact />
    </>
  );
}
