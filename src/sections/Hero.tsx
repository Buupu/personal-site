"use client";

import { flex, hstack, vstack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { useSetAtom } from "jotai";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { cursorHoverAtom } from "@/state/atoms";

export const Hero = () => {
  const setIsHovered = useSetAtom(cursorHoverAtom);

  const marqueeText = "SAMMY FATTAH • ".repeat(4);

  return (
    <div
      className={vstack({
        w: "full",
        maxW: "1180px",
        h: "100vh",
        py: 4,
      })}
    >
      <Cursor />
      <Header />
      <div
        className={vstack({
          flex: 1,
          alignItems: "center",
          justify: "space-between",
          maxW: "full",
        })}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={flex({
            direction: "column",
            align: "center",
            justify: "center",
            fontFamily: "Noto Sans Display",
            py: 6,
            w: "full",
            overflow: "visible",
          })}
        >
          <div className={marqueeWrapper}>
            <div className={marqueeContent}>{marqueeText}</div>
            <div className={marqueeContent}>{marqueeText}</div>
          </div>
          <div className={marqueeWrapper}>
            <div className={marqueeContentReverse}>{marqueeText}</div>
            <div className={marqueeContentReverse}>{marqueeText}</div>
          </div>
        </div>
        <div className={css({ w: "full", h: "2px", bg: "black" })} />
        <div
          className={hstack({
            gap: 10,
            alignItems: "flex-start",
            flex: 1,
            py: 6,
          })}
        >
          <h3 className={css({ fontSize: "2xl", fontWeight: "semibold" })}>
            Information
          </h3>
          <p className={css({ fontSize: "3xl" })}>
            I specialize in building modern web applications using React,
            Next.js, and TypeScript. My approach combines technical precision
            with creative flair, turning complex requirements into elegant,
            user-friendly interfaces.
          </p>
          <div className={css({ h: "full", w: "4px", bg: "black" })} />
          <div
            className={flex({
              w: "600px",
              h: "full",
              justify: "center",
              alignItems: "center",
            })}
          >
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the marquee wrapper and content
const marqueeWrapper = css({
  position: "relative",
  w: "100%",
  maxW: "100%",
  display: "flex",
  overflow: "hidden",
  userSelect: "none",
  gap: "0",
  fontSize: "186px",
  whiteSpace: "nowrap",
  lineHeight: "1",
});

const marqueeContent = css({
  animation: "marqueeLeft 30s linear infinite",
});

const marqueeContentReverse = css({
  animation: "marqueeRight 30s linear infinite",
});
