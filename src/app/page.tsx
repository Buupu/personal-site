import { Hero } from "@/sections/Hero";
import { vstack } from "../../styled-system/patterns";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { ThemeName } from "../../styled-system/themes";
import { cookies } from "next/headers";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const store = await cookies();
  const themeName = (store.get("theme")?.value as ThemeName) ?? "light";
  return (
    <div className={vstack({ px: 2, w: "full" })}>
      <Hero themeName={themeName} />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
