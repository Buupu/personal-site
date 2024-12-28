import { Hero } from "@/sections/Hero";
import { vstack } from "../../styled-system/patterns";

export default function Home() {
  return (
    <div className={vstack({ backgroundColor: "#FFFFFF", px: 2, w: "full" })}>
      <Hero />
    </div>
  );
}
