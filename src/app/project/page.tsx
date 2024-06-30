"use client";
import React from "react";
import styles from "./page.module.css";
import { useTextRender } from "../../utils/useTextRender";

const page = () => {
  const [heading, _, refHeading] = useTextRender("Projects:", 60);
  const [subheadingCalc, fullSubheadingCalc, refSubheadingCalc] = useTextRender(
    "Bitcoin Private Key Range Calculator",
    60
  );

  const [infoCalc, fullInfoCalc, refCalc] = useTextRender(
    "Tento projekt je kalkulačka pro výpočet rozsahu privátních klíčů pro bitcoin puzzle a také pro výpočet rychlosti brute force útoku. Aplikace byla vytvořena za použití HTML, CSS, JavaScriptu a Svelte. Projekt demonstruje moje schopnosti v oblasti kryptografie a tvorby uživatelsky přívětivých rozhraní.",
    10
  );

  const [subheadingLocal, fullSubheadingLocal, refSubheadingLocal] = useTextRender("Local Chat", 60);

  const [infoLocal, fullInfoLocal, refLocal] = useTextRender(
    "Local Chat je chatovací aplikace, která umožňuje uživatelům komunikovat v reálném čase. Aplikace využívá Firebase databázi pro správu uživatelů a jejich zpráv. Přestože je logika přihlašování implementována na front-endu, projekt ukazuje moje schopnosti v práci s databázemi a real-time komunikací.",
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
    </div>
  );
};

export default page;
