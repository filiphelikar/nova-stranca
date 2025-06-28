"use client";
import { useEffect } from "react";
import Styles from "./Parallax.module.css";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const Parallax = () => {

  const pathname = usePathname()

  useEffect(() => {
    const parallaxScroll = () => {
      const value = window.scrollY;
      gsap.to("#stars", {
        duration: 0.5,
        x: value * -0.15,
        y: value * -0.15,
        ease: "power1.out",
      });
      gsap.to("#moon", {
        duration: 0.5,
        x: value * -0.35,
        y: value * -0.35,
        ease: "power1.out",
      });
      gsap.to("#mountainsFront", {
        duration: 0.5,
        y: value * 0.001,
        scale: 1 + value * 0.0001,
        filter: `blur(${value * 0.007}px)`,
        ease: "power1.out",
      });
      gsap.to("#heading", {
        duration: 0.5,
        marginTop: value * 0.8,
        filter: `blur(${value * 0.002}px)`,
        ease: "power1.out",
      });
    };

    window.addEventListener("scroll", parallaxScroll);

    return () => {
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);

  if (pathname !== '/') {
    return
  }

  return (
    <>
      <div className={Styles["gradient"]}></div>
      <section className={Styles.parallax}>
        <h1 id="heading" className={Styles["heading"]}>
          {"<>Filip Helikar</>"}
        </h1>
        <img
          id="stars"
          src="/img/stars.png"
          alt="parallax component"
          className={Styles.img}
        />
        <img
          id="moon"
          src="/img/moon.png"
          alt="parallax component"
          className={Styles.img}
        />
        <img
          id="mountainsBehind"
          src="/img/mountains_behind.png"
          alt="parallax component"
          className={Styles.img}
        />
        <img
          id="mountainsFront"
          src="/img/mountains_front.png"
          alt="parallax component"
          className={Styles.front}
        />
      </section>
    </>
  );
};

export default Parallax;
