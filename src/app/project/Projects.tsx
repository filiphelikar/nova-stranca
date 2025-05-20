"use client";
import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { useTextRender } from "../../utils/useTextRender";
import { useSelector } from "react-redux";
import { RootState } from "../_GlobalRedux/store";
import InfoCard from "./_Components/InfoCard";
import Image from "next/image";
import { projects } from "./projectsData";

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
      {projects.map((proj, index) => {
        const info = translations.Projects[proj.textKey as keyof typeof translations.Projects];

        const card = (
          <InfoCard
            heading={proj.title}
            text={info}
            Link={proj.github}
            technologies={proj.tech}
            last={index === projects.length - 1}
          />
        );

        const image = proj.isBeforeAfter ? (
          <>
            <Image
              width={700}
              height={300}
              className={styles["img-before"]}
              src={proj.imageBefore!}
              alt=""
            />
            <Image
              width={700}
              height={300}
              className={styles["img-after"]}
              src={proj.imageAfter!}
              alt=""
            />
          </>
        ) : (
          <Image
            width={700}
            height={300}
            className={styles["img"]}
            src={proj.image!}
            alt={proj.title}
          />
        )

        if (index % 2 !== 0) {
          return (
            <React.Fragment key={proj.title}>
              {!isMobile && card}
              <a
                className={styles["img-container"]}
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image}
                <div className="orbit-container">
                  <Image
                    width={200}
                    height={120}
                    className={styles["img-asteroid"]}
                    src="/img/asteroid.png"
                    alt=""
                  />
                </div>
              </a>
              {isMobile && card}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={proj.title}>
              <a
                className={styles["img-container"]}
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image}
                <div className="orbit-container">
                  <Image
                    width={200}
                    height={120}
                    className={styles["img-asteroid"]}
                    src="/img/asteroid.png"
                    alt=""
                  />
                </div>
              </a>
              {card}
            </React.Fragment>
          )
        }
      })}
    </div>
  );
}

export default Project