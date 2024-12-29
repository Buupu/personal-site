import { Hero } from "@/sections/Hero";
import { vstack } from "../../styled-system/patterns";
import { Skills } from "@/components/Skills";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div className={vstack({ backgroundColor: "#FFFFFF", px: 2, w: "full" })}>
      <Hero />
      <Skills />
    </div>
  );
}
