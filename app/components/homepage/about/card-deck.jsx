// @flow strict
"use client";
import { useState, useCallback } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
import "./card-deck.scss";

// Spring configuration helpers
const toSpring = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

// Interpolate rotation and scale into a CSS transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function CardDeck({ images }) {
  const [gone] = useState(() => new Set());

  const [props, api] = useSprings(images.length, (i) => ({
    ...toSpring(i),
    from: toSpring(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2;
      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone
          ? (200 + window.innerWidth) * dir
          : down
          ? mx
          : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * vx : 0);
        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 50,
            tension: down ? 800 : isGone ? 200 : 500,
          },
        };
      });

      // Reset deck after all cards are swiped
      if (!down && gone.size === images.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => toSpring(i));
        }, 600);
      }
    }
  );

  return (
    <div className="deck-container">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck-card" key={images[i].id} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            className="deck-card-inner"
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <Image
              src={images[i].img}
              width={340}
              height={440}
              alt={`Profile photo ${i + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
              priority={i === images.length - 1}
            />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default CardDeck;
