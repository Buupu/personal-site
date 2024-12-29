"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { css } from "../../styled-system/css";
import { useSetAtom } from "jotai";
import { cursorHoverAtom } from "@/state/atoms";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<SVGTextPathElement[]>([]);
  const setIsHovered = useSetAtom(cursorHoverAtom);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          paths.current.forEach((path, i) => {
            if (path) {
              const offset = -40 + i * 40 + self.progress * 40;
              path.setAttribute("startOffset", `${offset}%`);
            }
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <svg className={css({ w: "full" })} width={"2000"} viewBox="0 0 250 50">
        <path
          fill="none"
          id="curve"
          d="m0,25c31.25,0,31.25-17,62.5-17,31.25,0,31.25,17,62.5,17,31.25,0,31.25-17,62.5-17,31.25,0,31.25,17,62.5,17"
        />
        <text
          className={css({
            fill: "black",
            fontSize: "6px",
            textTransform: "uppercase",
          })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...Array(4)].map((_, i) => (
            <textPath
              key={i}
              ref={(el) => {
                if (el) paths.current[i] = el;
              }}
              startOffset={`${i * 0}%`}
              href="#curve"
            >
              React • Next.js • TypeScript • CSS •
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
};
