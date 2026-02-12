"use client";

import { useState, useEffect, Children } from "react";

function CodeTypewriter({ children, lineDelay = 120, startDelay = 500 }) {
  const lines = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= lines.length) return;

    const timeout = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, lineDelay);

    return () => clearTimeout(timeout);
  }, [started, visibleCount, lines.length, lineDelay]);

  const done = visibleCount >= lines.length;

  return (
    <>
      {lines.map((line, i) => (
        <div
          key={i}
          className="transition-all duration-300"
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(4px)",
          }}
        >
          {line}
        </div>
      ))}
      {!done && started && (
        <div className="flex items-center h-5 ml-4 lg:ml-8">
          <span className="inline-block w-[8px] h-[18px] bg-pink-500/80 animate-pulse rounded-sm" />
        </div>
      )}
    </>
  );
}

export default CodeTypewriter;
