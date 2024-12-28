"use client";

import Link from "next/link";
import { hstack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

export const Header = () => {
  const localtime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={hstack({
        w: "full",
        maxW: "1180px",
        pb: 4,
        borderBottomWidth: 2,
        justify: "space-between",
      })}
    >
      <div className={hstack({ gap: 20 })}>
        <p>Sammy Fattah</p>
        <p>Front-End Developer</p>
      </div>
      <div className={hstack({ gap: 20, alignItems: "center" })}>
        <button
          className={css({
            bg: "black",
            color: "white",
            borderRadius: "full",
            p: 1,
            cursor: "pointer",
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M580-120q-74.31 0-139.89-28.3-65.58-28.3-114.55-77.26-48.96-48.97-77.26-114.55Q220-405.69 220-479.76q0-74.96 28.42-140.45 28.43-65.48 77.16-114.21 48.73-48.73 114.59-77.16Q506.02-840 580-840q32.46 0 62.31 5.54 29.84 5.54 57.69 17.69-73.31 59.92-116.65 146.96Q540-582.77 540-480t43.35 189.81Q626.69-203.15 700-143.23q-27.85 12.15-57.69 17.69Q612.46-120 580-120Zm0-40h21q10 0 19-2-57-66-88.5-147.5T500-480q0-89 31.5-170.5T620-798q-9-2-19-2h-21q-133 0-226.5 93.5T260-480q0 133 93.5 226.5T580-160Zm-80-320Z" />
          </svg>
        </button>
        <div className={hstack({ gap: 2 })}>
          <p>Glasgow</p>
          <p>{localtime}</p>
        </div>
        <Link
          href="/"
          className={css({
            position: "relative",
            px: "4",
            py: "1.5",
            fontSize: "sm",
            fontWeight: "medium",
            color: "black",
            borderWidth: "1px",
            borderColor: "black",
            borderStyle: "solid",
            transition: "all 0.2s ease-in-out",
            _hover: {
              bg: "black",
              color: "white",
            },
          })}
        >
          View CV
        </Link>
      </div>
    </div>
  );
};
