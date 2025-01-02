"use client";

import { flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { useSetAtom } from "jotai";
import { cursorHoverAtom } from "@/state/atoms";
import { useRef, useState } from "react";
import gsap from "gsap";

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

export const Footer = () => {
  const setIsHovered = useSetAtom(cursorHoverAtom);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Animate the success message
    if (formRef.current) {
      gsap.to(formRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          gsap.to(formRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
        },
      });
    }
  };

  return (
    <div
      className={flex({
        w: "full",
        maxW: "1180px",
        py: "20",
        direction: "column",
        gap: "20",
      })}
    >
      <div
        className={flex({
          w: "full",
          justify: "space-between",
          align: "flex-start",
          gap: "10",
        })}
      >
        <div className={flex({ direction: "column", gap: "6", flex: 1 })}>
          <h2 className={css({ fontSize: "3xl", fontWeight: "bold" })}>
            Let's Connect
          </h2>
          <p className={css({ fontSize: "xl", maxW: "md" })}>
            Feel free to reach out for collaborations, opportunities, or just to
            say hello!
          </p>
          <div className={flex({ gap: "6" })}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                color: "text",
                _hover: { opacity: 0.7 },
              })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                color: "text",
                _hover: { opacity: 0.7 },
              })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://youtube.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                color: "text",
                _hover: { opacity: 0.7 },
              })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={flex({
            direction: "column",
            gap: "6",
            flex: 1,
          })}
        >
          {isSubmitted ? (
            <div
              className={css({
                fontSize: "xl",
                fontWeight: "medium",
                color: "text",
              })}
            >
              Thanks for reaching out! I'll get back to you soon.
            </div>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={css({
                  w: "full",
                  p: "4",
                  bg: "transparent",
                  borderWidth: "1px",
                  borderColor: "accent",
                  _focus: {
                    outline: "none",
                    borderColor: "text",
                  },
                })}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className={css({
                  w: "full",
                  p: "4",
                  bg: "transparent",
                  borderWidth: "1px",
                  borderColor: "accent",
                  _focus: {
                    outline: "none",
                    borderColor: "text",
                  },
                })}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className={css({
                  w: "full",
                  p: "4",
                  bg: "transparent",
                  borderWidth: "1px",
                  borderColor: "accent",
                  _focus: {
                    outline: "none",
                    borderColor: "text",
                  },
                  resize: "none",
                })}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={css({
                  alignSelf: "flex-start",
                  px: "6",
                  py: "3",
                  bg: "text",
                  color: "body",
                  fontWeight: "medium",
                  _disabled: {
                    opacity: 0.7,
                    cursor: "not-allowed",
                  },
                })}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </>
          )}
        </form>
      </div>
      <div
        className={css({
          w: "full",
          textAlign: "center",
          color: "text",
          opacity: 0.7,
          fontSize: "sm",
        })}
      >
        © {new Date().getFullYear()} Sammy Fattah. All rights reserved.
      </div>
    </div>
  );
};
