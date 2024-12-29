"use client";

import { useRef, useEffect } from "react";
import { css } from "../../styled-system/css";
import gsap from "gsap";
import { useAtom } from "jotai";
import { cursorHoverAtom } from "@/state/atoms";

export const Cursor = () => {
  const [isHovered] = useAtom(cursorHoverAtom);
  const size = isHovered ? 300 : 30;
  const ref = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    mousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const animate = () => {
    // Smooth transition to new position
    gsap.to(ref.current, {
      x: mousePosition.current.x,
      y: mousePosition.current.y,
      xPercent: -50,
      yPercent: -50,
      duration: isHovered ? 1 : 0.6,
      ease: "power2.out",
    });

    // Continue animation
    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Initialize cursor at current mouse position
    const initMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Start animation after getting initial position
      animate();
      rafId.current = requestAnimationFrame(animate);

      // Remove the one-time initialization listener
      window.removeEventListener("mousemove", initMousePosition);
      // Add the regular mouse move listener
      window.addEventListener("mousemove", handleMouseMove);
    };

    // Add one-time initialization listener
    window.addEventListener("mousemove", initMousePosition, { once: true });

    return () => {
      // Clean up
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  return (
    <div
      className={css({
        zIndex: 1000,
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "full",
        backgroundColor: "white",
        pointerEvents: "none",
        opacity: 1,
        transition:
          "height 0.3s ease-in-out, width 0.3s ease-in-out, filter 0.3s ease-in-out",
        mixBlendMode: "difference",
      })}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        filter: isHovered ? "blur(20px)" : "blur(0px)",
      }}
      ref={ref}
    />
  );
};
