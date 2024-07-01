"use client";
import React from "react";
import styles from "./page.module.css";
import { useTextRender } from "../../utils/useTextRender";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/_GlobalRedux/store';


const page = () => {

  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = useSelector((state: RootState) => state.language.translations[lang as keyof (typeof state.language.translations)])

  const [heading, _, refHeading] = useTextRender("Projects:", 60);
  const [subheadingCalc, fullSubheadingCalc, refSubheadingCalc] = useTextRender(
    "Bitcoin Private Key Range Calculator",
    60
  );

  const [infoCalc, fullInfoCalc, refCalc] = useTextRender(
    translations.Projects.infoCalc,
    10
  );

  const [subheadingLocal, fullSubheadingLocal, refSubheadingLocal] = useTextRender("Local Chat", 60);

  const [infoLocal, fullInfoLocal, refLocal] = useTextRender(
    translations.Projects.infoLocal,
    10
  );

  const [subheadingPhoto, fullSubheadingPhoto, refSubheadingPhoto] = useTextRender("Photo by Filip", 60);

  const [infoPhoto, fullInfoPhoto, refPhoto] = useTextRender(
    translations.Projects.infoPhoto,
    10
  );

  return (
    <div className={styles["main"]}>
      <h2 ref={refHeading}>{heading}</h2>
      <a href="https://github.com/filiphelikar/privatekeyrange" target="blank">
        <img
          className={styles["img"]}
          src="/img/key_range.png"
          alt="Bitcoin Private Key Range Calculator"
        />
      </a>
      <a
        href="https://github.com/filiphelikar/privatekeyrange"
        target="blank"
        className={styles["info"]}
      >
        <div className={styles["rendered-text"]}>
          <h3 ref={refSubheadingCalc}>{subheadingCalc}</h3>
          <p ref={refCalc}>{infoCalc}</p>
        </div>
        <div className={styles["place-holder"]}>
          <h3>{fullSubheadingCalc}</h3>
          <p>{fullInfoCalc}</p>
        </div>
      </a>
      <a
        href="https://github.com/filiphelikar/local-chatting-app"
        target="blank"
        className={styles["info"]}
      >
        <div className={styles["rendered-text"]}>
          <h3 ref={refSubheadingLocal}>{subheadingLocal}</h3>
          <p ref={refLocal}>{infoLocal}</p>
        </div>
        <div className={styles["place-holder"]}>
          <h3>{fullSubheadingLocal}</h3>
          <p>{fullInfoLocal}</p>
        </div>
      </a>
      <a
        href="https://github.com/filiphelikar/local-chatting-app"
        target="blank"
      >
        <img className={styles["img"]} src="/img/local_chat.png" alt="" />
      </a>
       <a
        href="https://github.com/filiphelikar/filiphelikar"
        target="blank"
      >
        <img className={styles["img"]} src="/img/photo_page.png" alt="" />
      </a>
      <a
        href="https://github.com/filiphelikar/filiphelikar"
        target="blank"
        className={styles["info"]}
      >
        <div className={styles["rendered-text"]}>
          <h3 ref={refSubheadingPhoto}>{subheadingPhoto}</h3>
          <p ref={refPhoto}>{infoPhoto}</p>
        </div>
        <div className={styles["place-holder"]}>
          <h3>{fullSubheadingPhoto}</h3>
          <p>{fullInfoPhoto}</p>
        </div>
      </a>
    </div>
  );
};

export default page;
