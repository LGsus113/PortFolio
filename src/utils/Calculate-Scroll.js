import { useState, useEffect } from "react";

const useScrollFraction = () => {
  const [scrollFraction, setScrollFraction] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const newScrollFraction = scrollPosition / maxScroll;
      setScrollFraction(newScrollFraction);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollFraction;
};

export default useScrollFraction;
