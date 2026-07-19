"use client";
import { useState, useEffect } from "react";

/**
 * Infinite typewriter: types each word, pauses, deletes it, then moves on.
 * Loops forever.
 */
export default function Typewriter({
  words = [],
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseTime = 1800,
  className = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length] || "";
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? word.slice(0, text.length - 1)
              : word.slice(0, text.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-caret inline-block w-[3px] sm:w-[5px] h-[0.85em] ml-1 sm:ml-2 align-baseline bg-gradient-to-b from-indigo-400 to-fuchsia-400 rounded-full" />
    </span>
  );
}
