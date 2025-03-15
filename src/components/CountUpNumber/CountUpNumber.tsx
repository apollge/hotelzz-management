"use client";

import { useEffect, useState } from "react";

type CountUpNumberProps = {
  endValue: number;
  duration: number;
};

const CountUpNumber = ({ endValue, duration }: CountUpNumberProps) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;
      if (progress < duration) {
        setcount(Math.min(endValue, (progress / duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setcount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration]);

  return (
    <p className="md:font-bold font-medium text-lg xl:text-5xl">
      {Math.round(count)}
    </p>
  );
};

export default CountUpNumber;
