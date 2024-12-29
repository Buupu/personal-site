"use client";

import { useRef, useEffect } from "react";
import { css } from "../../styled-system/css";
import gsap from "gsap";
import { vstack } from "../../styled-system/patterns";

export const ScrollIndicator = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const text = textRef.current;
    if (!dot || !text) return;

    // Create bounce animation for dot
    gsap.to(dot, {
      yPercent: 700,
      duration: 1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Create fade animation for text
    gsap.to(text, {
      opacity: 0.3,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      // Cleanup animations
      gsap.killTweensOf([dot, text]);
    };
  }, []);

  return (
    <div className={vstack({ alignItems: "center" })}>
      <h4
        ref={textRef}
        className={css({
          fontSize: "xl",
          fontWeight: "bold",
        })}
      >
        SCROLL
      </h4>
      <div
        className={css({
          width: "2px",
          height: "80px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "full",
          overflow: "visible",
          position: "relative",
        })}
      >
        <div
          ref={dotRef}
          className={css({
            width: "4px",
            height: "6px",
            backgroundColor: "black",
            borderRadius: "full",
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
          })}
        />
      </div>
    </div>
  );
};
