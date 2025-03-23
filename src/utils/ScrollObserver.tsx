
import { useEffect } from "react";

export const useScrollObserver = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".scroll-reveal, .slide-up, .slide-left, .slide-right, .scale-in"
      );

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight * 0.9 && elementBottom > 0;

        if (isVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    // Initial check on load
    animateOnScroll();

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);
};

export default useScrollObserver;
