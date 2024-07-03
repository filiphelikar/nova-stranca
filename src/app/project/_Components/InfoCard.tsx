"use client";
import React from "react";
import styles from "./InfoCard.module.css";
import { useTextRender } from "../../../utils/useTextRender";

const InfoCard = ({heading, text, Link}:{heading: string, text: string, Link: string}) => {


  const [subheading, fullSubheading, refSubheading] = useTextRender(
    heading,
    60
  );

  const [rebnderText, fullText, refText] = useTextRender(text, 10);

  return (
    <a href={Link} target="blank" className={styles["info"]}>
      <div className={styles["rendered-text"]}>
        <h3 ref={refSubheading}>{subheading}</h3>
        <p ref={refText}>{rebnderText}</p>
      </div>
      <div className={styles["place-holder"]}>
        <h3>{fullSubheading}</h3>
        <p>{fullText}</p>
      </div>
    </a>
  );
};

export default InfoCard;
