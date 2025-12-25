import React, { useState } from "react";

const useIntersection = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
    }
    setIsIntersecting(true);
  }, options);
};

export default useIntersection;
