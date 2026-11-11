"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// `src` is a URL under /public (e.g. "/lottie/code.json"). The JSON is fetched
// only when the animation is about to scroll into view, so it stays out of the
// JS bundle and off the initial page load.
const AnimationLottie = ({ src }) => {
  const ref = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        fetch(src)
          .then((res) => res.json())
          .then((json) => !cancelled && setData(json))
          .catch(() => {});
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [src]);

  return (
    <div ref={ref}>
      {data && <Lottie loop autoplay animationData={data} style={{ width: "95%" }} />}
    </div>
  );
};

export default AnimationLottie;
