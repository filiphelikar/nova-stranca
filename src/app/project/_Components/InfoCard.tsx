"use client";
import React, { JSX } from "react";
import styles from "./InfoCard.module.css";
import { useTextRender } from "../../../utils/useTextRender";
import { SiAngular } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiSvelteFill } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoPwa } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { Technologies } from "../projectsData";

interface Props {
  heading: string,
  text: string,
  Link: string,
  last?: boolean,
  technologies?: Technologies[]
}

const InfoCard = ({ heading, text, Link, last = false, technologies }: Props) => {

  const technologyIcons: Record<Technologies, JSX.Element> = {
    angular: <SiAngular />,
    react: <FaReact />,
    next: <SiNextdotjs />,
    svelte: <RiSvelteFill />,
    electron: <IoLogoElectron />,
    html: <FaHtml5 />,
    css: <FaCss3 />,
    tailwind: <RiTailwindCssFill />,
    firebase: <IoLogoFirebase />,
    pwa: <IoLogoPwa />,
    ts: <SiTypescript />,
    js: <FaJs />,
  };

  const [subheading, fullSubheading, refSubheading] = useTextRender(
    heading,
    60
  );

  const [rebnderText, fullText, refText] = useTextRender(text, 10);

  const style = last ? "last-info" : "info"

  return (
    <a href={Link} target="blank" className={styles[style]}>
      <div className={styles["rendered-text"]}>
        <h3 ref={refSubheading}>{subheading}</h3>
        <p ref={refText}>{rebnderText}</p>
      </div>
      <div className={styles["place-holder"]}>
        <h3>{fullSubheading}</h3>
        <p>{fullText}</p>
      </div>
      <br />
      {technologies && (
        <div className={styles["icons"]}>
          {technologies.map((technology, index) => (
            <div className={styles["icon"]} key={index}>
              {technologyIcons[technology]}
            </div>
          ))}
        </div>
      )}

    </a>
  );
};

export default InfoCard;