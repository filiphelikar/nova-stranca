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
  const [subHeadingSkils, fullSubHeadingSkils, refSubHeadingSkils] = useTextRender(
    translations.aboutMe.subHeadingSkills,
    60
  );
  const [textSkills1, fullTextSkills1, reftextSkills1] = useTextRender(
    translations.aboutMe.textSkills1,
    16
  );
  const [textSkills2, fullTextSkills2, reftextSkills2] = useTextRender(
    translations.aboutMe.textSkills2,
    18
  );
  const [textSkills3, fullTextSkills3, reftextSkills3] = useTextRender(
    translations.aboutMe.textSkills3,
    20
  );
  const [textSkills4, fullTextSkills4, reftextSkills4] = useTextRender(
    translations.aboutMe.textSkills4,
    22
  );
  const [textSkills5, fullTextSkills5, reftextSkills5] = useTextRender(
    translations.aboutMe.textSkills5,
    24
  );
  const [textSkills6, fullTextSkills6, reftextSkills6] = useTextRender(
    translations.aboutMe.textSkills6,
    26
  );
  const [textSkills7, fullTextSkills7, reftextSkills7] = useTextRender(
    translations.aboutMe.textSkills7,
    28
  );
  const [textWeChall, fullTextWeChall, reftextWeChall] = useTextRender(
    "- WeChall: www.wechall.net/profile/filip_helikar",
    30
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
      <div className={styles["message"]}>
        <div className={styles["place-holder"]}>
          <h3 className={styles["h3"]} ref={refSubHeadingSkils}>
            {subHeadingSkils}
          </h3>
          <p ref={reftextSkills1}>{textSkills1}</p>
          <p ref={reftextSkills2}>{textSkills2}</p>
          <p ref={reftextSkills3}>{textSkills3}</p>
          <p ref={reftextSkills4}>{textSkills4}</p>
          <p ref={reftextSkills5}>{textSkills5}</p>
          <p ref={reftextSkills6}>{textSkills6}</p>
          <p ref={reftextSkills7}>{textSkills7}</p>
          <a target="blank" ref={reftextWeChall}>{textWeChall}</a>
        </div>
        <h3 className={styles["full"]}>{subHeadingSkils}</h3>
        <p className={styles["full"]}>{fullTextSkills1}</p>
        <p className={styles["full"]}>{fullTextSkills2}</p>
        <p className={styles["full"]}>{fullTextSkills3}</p>
        <p className={styles["full"]}>{fullTextSkills4}</p>
        <p className={styles["full"]}>{fullTextSkills5}</p>
        <p className={styles["full"]}>{fullTextSkills6}</p>
        <p className={styles["full"]}>{fullTextSkills7}</p>
        <a href="https://www.wechall.net/profile/filip_helikar" target="blank" className={styles["full"]}>{fullTextWeChall}</a>
      </div>
      <img
        className={styles["networking-img"]}
        src="/img/networking.webp"
        alt="netwoking & linux ilustration"
      />
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