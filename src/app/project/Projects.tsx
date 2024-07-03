"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useTextRender } from "../../utils/useTextRender";
import { useSelector } from "react-redux";
import { RootState } from "../_GlobalRedux/store";
import InfoCard from "./_Components/InfoCard";

const Project = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = useSelector(
    (state: RootState) =>
      state.language.translations[
        lang as keyof typeof state.language.translations
      ]
  );

  const [heading, _, refHeading] = useTextRender("Projects:", 60);

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      <InfoCard
        heading={"Bitcoin Private Key Range Calculator"}
        text={translations.Projects.infoCalc}
        Link={"https://github.com/filiphelikar/privatekeyrange"}
      />

      {!isMobile && (
        <InfoCard
          heading={"Local Chat"}
          text={translations.Projects.infoLocal}
          Link={"https://github.com/filiphelikar/local-chatting-app"}
        />
      )}
      <a
        href="https://github.com/filiphelikar/local-chatting-app"
        target="blank"
      >
        <img className={styles["img"]} src="/img/local_chat.png" alt="" />
      </a>
      {isMobile && (
        <InfoCard
          heading={"Local Chat"}
          text={translations.Projects.infoLocal}
          Link={"https://github.com/filiphelikar/local-chatting-app"}
        />
      )}
      <a href="https://filiphelikar.github.io/filiphelikar/" target="blank">
        <img className={styles["img"]} src="/img/photo_page.png" alt="" />
      </a>
      <InfoCard
        heading={"Photo by Filip"}
        text={translations.Projects.infoPhoto}
        Link={"https://filiphelikar.github.io/filiphelikar/"}
      />

      {!isMobile && (
        <InfoCard
          heading={"Portfolio Page"}
          text={translations.Projects.infoProject}
          Link={"https://filiphelikar.cz"}
        />
      )}
      <a href="https://filiphelikar.cz" target="blank">
        <img className={styles["img"]} src="/img/portfolio_page.png" alt="" />
      </a>
      {isMobile && (
        <InfoCard
          heading={"Portfolio Page"}
          text={translations.Projects.infoProject}
          Link={"https://filiphelikar.cz"}
        />
      )}
    </div>
  );
};

export default Project;
