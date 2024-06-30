"use client"
import styles from "./page.module.css"
import gsap from 'gsap';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (entry) {
        const rect = entry.target.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isCentered = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;

        if (isCentered) {
          gsap.to("#aiImg", { duration: 0.5, filter: `blur(0px)`});
        } else {
          const value = window.scrollY;
          gsap.to("#aiImg", { duration: 0.5, filter: `blur(${value * 0.002}px)` });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [entry]);

  return (
    <div className={styles["main"]}>
      <div className={styles["img-container"]}>
        <img ref={ref} id="aiImg" className={styles["img"]} src="/img/ai_img.jpg" alt="" />
      </div>
    </div>
  );
};

export default Page;


