"use client"
import styles from "./page.module.css"
import gsap from 'gsap';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTextRender } from "../../utils/useTextRender";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/_GlobalRedux/store';
import Link from "next/link";


const Page = () => {

  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = useSelector((state: RootState) => state.language.translations[lang as keyof (typeof state.language.translations)])

  const [heading, _, refHeading] = useTextRender("Home:", 60);

  const [subheading, fullSubheading, refSubheading] = useTextRender(
    translations.home.subheading,
    60
  );

  const [info, fullInfo, refInfo] = useTextRender(
    translations.home.text,
    10
  );

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
        <h2 ref={refHeading}>{heading}</h2>
      <img ref={ref} id="aiImg" className={styles["img"]} src="/img/ai_img.jpg" alt="" />
      <div className={styles["info"]}>
        <div className={styles["rendered-text"]}>
          <h3 ref={refSubheading}>{subheading}</h3>
          <p ref={refInfo}>{info}</p>
        </div>
        <div className={styles["place-holder"]}>
          <h3>{fullSubheading}</h3>
          <p>{fullInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;


