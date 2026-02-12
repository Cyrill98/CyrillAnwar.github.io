"use client";

import { useState, useEffect, useRef } from "react";

function Typewriter({ text, speed = 30, delay = 500, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {!done && started && (
        <span className="inline-block w-[2px] h-[1em] bg-[#16f2b3] ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}

export default Typewriter;
