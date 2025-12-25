import type { ReactNode } from "react";
import AnimatedContent from "../react-bits/AnimatedContent";

interface AnimateProps {
  direction?: "horizontal" | "vertical" | undefined;
  reverse?: boolean;
  delay?: number;
  children: ReactNode;
}

const Animate = ({
  direction = "horizontal",
  reverse = false,
  delay = 0.1,
  children,
}: AnimateProps) => {
  return (
    <AnimatedContent
      distance={100}
      direction={direction}
      reverse={reverse}
      duration={1.3}
      threshold={0.2}
      delay={delay}
    >
      {children}
    </AnimatedContent>
  );
};

export default Animate;
