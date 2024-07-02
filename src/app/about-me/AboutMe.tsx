"use client";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./page.module.css";
import { useTextRender } from "../../utils/useTextRender";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/_GlobalRedux/store';

const AboutMe = () => {

  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = useSelector((state: RootState) => state.language.translations[lang as keyof (typeof state.language.translations)])

  const [textHeading, FullTextHeading, refHeading] = useTextRender(
    "About Me:",
    60
  );
  const [subHeading, fullSubHeading, refSubHeading] = useTextRender(
    translations.aboutMe.subHeading,
    60
  );
  const [text, fullText, ref] = useTextRender(
    translations.aboutMe.text,
    8
  );

  useEffect(() => {
    const elements: any[] = [
      document.querySelector("#certifikat1"),
      document.querySelector("#certifikat2"),
    ];

    elements.forEach((element) => {
      if (element) {
        VanillaTilt.init(element, {
          max: 2,
          speed: 200,
        });
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element && element.vanillaTilt) {
          element.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section className={styles["main"]}>
      <h2 ref={refHeading}>{textHeading}</h2>
      <img
        className={styles["solar-img"]}
        src="/img/solar_img.webp"
        alt="solar"
      />
      <div className={styles["message"]}>
        <div className={styles["place-holder"]}>
          <h3 className={styles["h3"]} ref={refSubHeading}>
            {subHeading}
          </h3>
          <p ref={ref}>{text}</p>
        </div>
        <h3 className={styles["full"]}>{fullSubHeading}</h3>
        <p className={styles["full"]}>{fullText}</p>
      </div>
      <div id="certifikat1" className={styles["certifikat"]}>
        <a
          href="https://www.itnetwork.cz/javascript/react/zaklady"
          target="_blank"
        >
          <img src="/img/certifikat1.png" alt="certifikat" />
        </a>
      </div>
      <div id="certifikat2" className={styles["certifikat"]}>
        <a
          href="https://www.itnetwork.cz/javascript/react/rest-api"
          target="_blank"
        >
          <img src="/img/certifikat2.png" alt="certifikat" />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;