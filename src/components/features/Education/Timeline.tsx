import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

interface TimelineProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  children,
  height = "h-[300px]",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${className} ${height} flex flex-col justify-between py-10`}
    >
      {/* Static Background Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-slate-100/10 rounded-full" />

      {/* Animated Progress Line */}
      <motion.div
        className="absolute top-0 left-0 sm:left-1/2 -translate-x-1/2 w-1 h-full bg-white origin-top rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"
        style={{ scaleY }}
      />
      {children}
    </div>
  );
};

export default Timeline;
