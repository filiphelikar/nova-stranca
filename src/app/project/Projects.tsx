"use client";
import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
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
      <a
        className={styles["img-container"]}
        href="https://github.com/filiphelikar/privatekeyrange"
        target="blank"
      >
        <img
          className={styles["img"]}
          src="/img/key_range.png"
          alt="Bitcoin Private Key Range Calculator"
        />
        <div className="orbit-container">
          <img
            className={styles["img-asteroid"]}
            src="/img/asteroid.png"
            alt=""
          />
        </div>
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
        className={styles["img-container"]}
        href="https://github.com/filiphelikar/local-chatting-app"
        target="blank"
      >
        <img className={styles["img"]} src="/img/local_chat.png" alt="" />
        <div className="orbit-container">
          <img
            className={styles["img-asteroid"]}
            src="/img/asteroid.png"
            alt=""
          />
        </div>
      </a>
      {isMobile && (
        <InfoCard
          heading={"Local Chat"}
          text={translations.Projects.infoLocal}
          Link={"https://github.com/filiphelikar/local-chatting-app"}
        />
      )}
      <a
        className={styles["img-container"]}
        href="https://filiphelikar.github.io/filiphelikar/"
        target="blank"
      >
        <img className={styles["img"]} src="/img/photo_page.png" alt="" />
        <div className="orbit-container">
          <img
            className={styles["img-asteroid"]}
            src="/img/asteroid.png"
            alt=""
          />
        </div>
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
          Link={"https://github.com/filiphelikar/nova-stranca"}
        />
      )}
      <a
        className={styles["img-container"]}
        href="https://github.com/filiphelikar/nova-stranca"
        target="blank"
      >
        <img className={styles["img"]} src="/img/portfolio_page.png" alt="" />
        <div className="orbit-container">
          <img
            className={styles["img-asteroid"]}
            src="/img/asteroid.png"
            alt=""
          />
        </div>
      </a>
      {isMobile && (
        <InfoCard
          heading={"Portfolio Page"}
          text={translations.Projects.infoProject}
          Link={"https://github.com/filiphelikar/nova-stranca"}
        />
      )}
      <a
        className={styles["img-container"]}
        href="https://github.com/filiphelikar/nvidia-ui"
        target="blank"
      >
        <img
          className={styles["img-before"]}
          src="/img/Nvidia_Desktop-before.png"
          alt=""
        />
        <img
          className={styles["img-after"]}
          src="/img/Nvidia_Desktop-after.png"
          alt=""
        />
        <div className="orbit-container">
          <img
            className={styles["img-asteroid"]}
            src="/img/asteroid.png"
            alt=""
          />
        </div>
      </a>
      <InfoCard
        heading={"Nvidia Desktop"}
        text={translations.Projects.infoNvidia}
        Link={"https://github.com/filiphelikar/nvidia-ui"}
      />
    </div>
  );
};

export default Project;
