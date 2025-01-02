"use client";

import { flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { atom, useAtom } from "jotai";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const experiences = [
  {
    id: "tickx",
    company: "TickX",
    role: "Front-End Developer",
    period: "2023 - Present",
    description:
      "Leading the front-end development of the next generation ticketing platform. Building performant and accessible user interfaces using React, Next.js, and TypeScript.",
  },
  {
    id: "zonal",
    company: "Zonal",
    role: "Software Engineer",
    period: "2022 - 2023",
    description:
      "Developed hospitality management solutions focusing on real-time ordering systems and payment integrations.",
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Web Developer",
    period: "2021 - 2022",
    description:
      "Worked with various clients to deliver custom web solutions, focusing on responsive design and modern web technologies.",
  },
  {
    id: "mott",
    company: "Mott MacDonald",
    role: "Graduate Software Engineer",
    period: "2020 - 2021",
    description:
      "Contributed to large-scale infrastructure projects, developing internal tools and data visualization solutions.",
  },
  {
    id: "jpmc",
    company: "JPMorgan & Chase",
    role: "Software Engineering Intern",
    period: "2019",
    description:
      "Worked on internal trading platforms, focusing on front-end development using React and TypeScript.",
  },
];

export const selectedExperienceAtom = atom(experiences[0].id);

export const Experience = () => {
  const [selectedId, setSelectedId] = useAtom(selectedExperienceAtom);
  const selectedExperience = experiences.find((exp) => exp.id === selectedId);
  const contentRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const periodRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const jobListRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (jobListRef.current && dividerRef.current && indicatorRef.current) {
      const listHeight = jobListRef.current.offsetHeight;
      dividerRef.current.style.height = `${listHeight}px`;

      const itemHeight = listHeight / experiences.length;
      indicatorRef.current.style.height = `${itemHeight}px`;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });

    const selectedIndex = experiences.findIndex((exp) => exp.id === selectedId);
    const selectedButton = buttonsRef.current[selectedIndex];
    const divider = dividerRef.current;

    if (selectedButton && indicatorRef.current && divider) {
      const buttonRect = selectedButton.getBoundingClientRect();
      const dividerRect = divider.getBoundingClientRect();
      const yOffset = buttonRect.top - dividerRect.top;

      gsap.to(indicatorRef.current, {
        top: yOffset,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }

    tl.fromTo(
      [roleRef.current, periodRef.current, descriptionRef.current],
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
      }
    );

    return () => {
      tl.kill();
    };
  }, [selectedId]);

  return (
    <div
      className={flex({
        w: "full",
        maxW: "1180px",
        h: "100vh",
        gap: "20",
        py: "4",
      })}
    >
      <div
        className={css({
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: "76px",
          fontWeight: "bold",
          letterSpacing: "0.3em",
          whiteSpace: "nowrap",
          userSelect: "none",
          fontFamily: "Noto Sans Display",
          textAlign: "end",
          lineHeight: 0.8,
        })}
      >
        EXPERIENCE
      </div>
      <div className={flex({ flex: 1, gap: "10", alignItems: "flex-start" })}>
        <div
          ref={jobListRef}
          className={flex({ direction: "column", gap: "4", flex: 1 })}
        >
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              ref={(el) => (buttonsRef.current[index] = el)}
              onClick={() => setSelectedId(exp.id)}
              className={css({
                textAlign: "left",
                py: "4",
                px: "6",
                fontSize: "xl",
                fontWeight: "medium",
                transition: "all 0.2s ease-in-out",
                opacity: selectedId === exp.id ? 1 : 0.5,
                _hover: {
                  opacity: 1,
                },
              })}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div
          ref={dividerRef}
          className={css({
            w: "1px",
            bg: "accent",
            position: "relative",
            overflow: "visible",
          })}
        >
          <div
            ref={indicatorRef}
            className={css({
              position: "absolute",
              left: 0,
              width: "2px",
              bg: "text",
              transition: "height 0.3s ease",
              transform: "translateX(-25%)",
              borderRadius: "full",
            })}
          />
        </div>
        {selectedExperience && (
          <div
            ref={contentRef}
            className={flex({
              direction: "column",
              gap: "4",
              flex: 2,
              p: "6",
            })}
          >
            <div>
              <h3
                ref={roleRef}
                className={css({ fontSize: "3xl", fontWeight: "bold" })}
              >
                {selectedExperience.role}
              </h3>
              <p ref={periodRef}>{selectedExperience.period}</p>
            </div>
            <p
              ref={descriptionRef}
              className={css({ fontSize: "xl", lineHeight: "tall" })}
            >
              {selectedExperience.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
