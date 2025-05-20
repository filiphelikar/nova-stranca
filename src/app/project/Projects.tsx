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
      {!isMobile && <InfoCard
        heading={"Streaks-app"}
        text={translations.Projects.infoStreaks}
        Link={"https://github.com/filiphelikar/streaks-app"}
        technologies={["angular", "pwa", "ts", "html", "tailwind"]}
      />}
      <a
        className={styles["img-container"]}
        href="https://streaks-app-lake.vercel.app/"
        target="blank"
      >
        <img
          className={styles["img"]}
          src="/img/streaks-app.png"
          alt="streaks app"
        />
        <div className="orbit-container">
          <img
            className={styles["img-asteroid"]}
            src="/img/asteroid.png"
            alt=""
          />
        </div>
      </a>
      {isMobile && <InfoCard
        heading={"Streaks-app"}
        text={translations.Projects.infoStreaks}
        Link={"https://github.com/filiphelikar/streaks-app"}
        technologies={["angular", "pwa", "ts", "html", "tailwind"]}
      />}
      <a
        className={styles["img-container"]}
        href="https://blog.filiphelikar.cz/"
        target="blank"
      >
        <img
          className={styles["img"]}
          src="/img/blog.png"
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
        heading={"Blog"}
        text={translations.Projects.infoBlog}
        Link={"https://github.com/filiphelikar/my-blog"}
        technologies={["next", "react", "ts", "html", "tailwind"]}
      />
      {!isMobile && (
        <InfoCard
          heading={"Fullstack Animal Bazar"}
          text={translations.Projects.infoAnimalBazar}
          Link={"https://github.com/filiphelikar/AnimalBazar-Be/"}
          technologies={["react", "ts", "html", "css"]}
        />
      )}
      <a
        className={styles["img-container"]}
        href="https://github.com/filiphelikar/AnimalBazar-Fe/"
        target="blank"
      >
        <img
          className={styles["img"]}
          src="/img/animal-bazar.png"
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
      {isMobile && (
        <InfoCard
          heading={"Fullstack Animal Bazar"}
          text={translations.Projects.infoAnimalBazar}
          Link={"https://github.com/filiphelikar/AnimalBazar-Be/"}
          technologies={["react", "ts", "html", "css"]}
        />
      )}
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
        technologies={["svelte", "js", "html", "css"]}
      />

      {!isMobile && (
        <InfoCard
          heading={"Local Chat"}
          text={translations.Projects.infoLocal}
          Link={"https://github.com/filiphelikar/local-chatting-app"}
          technologies={["react", "ts", "firebase", "html", "css"]}
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
          technologies={["react", "ts", "firebase", "html", "css"]}
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
        technologies={["js", "html", "css"]}
      />

      {!isMobile && (
        <InfoCard
          heading={"Portfolio Page"}
          text={translations.Projects.infoProject}
          Link={"https://github.com/filiphelikar/nova-stranca"}
          technologies={["next", "react", "ts", "html", "css"]}
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
          technologies={["next", "react", "ts", "html", "css"]}
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
        technologies={["electron", "react", "ts", "html", "css"]}
        last={true}
      />
    </div>
  );
};

export default Project;