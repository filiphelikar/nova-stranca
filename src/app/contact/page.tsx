"use client";
import React from "react";
import { useTextRender } from "@/utils/useTextRender";
import styles from "./page.module.css";
import ContactForm from "./_components/ContactForm";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Page = () => {
  const [heading, fullHeading, refHeading] = useTextRender("Contact:", 60);

  const [instagram, fullInstagram, refInstagram] = useTextRender(
    "instagram",
    60
  );

  const [phone, fullPhone, refPhone] = useTextRender("+420 736 778 466", 60);

  const [email, fullEmail, refEmail] = useTextRender(
    "filip.helikar@seznam.cz",
    60
  );

  return (
    <section className={styles["main"]}>
      <h2 ref={refHeading}>
        {heading}
      </h2>
      <ContactForm />
      <div className={styles["info-container"]}>
        <div className={styles["container"]}>
          <a
            className={styles["a-container"]}
            href="https://www.instagram.com/filiphelikar/"
            target="blank"
          >
            <div style={{ fontSize: "24px" }}>
              <FaInstagram />
            </div>
            <p className={styles["visible"]} ref={refInstagram}>
              {instagram}
            </p>
            <p className={styles["hide"]}>{fullInstagram}</p>
          </a>
          <br />
          <a
            className={styles["a-container"]}
            href="tel:+420736778466"
          >
            <div style={{ fontSize: "24px" }}>
              <IoPhonePortraitOutline />
            </div>
            <p className={styles["visible"]} ref={refPhone}>
              {phone}
            </p>
            <p className={styles["hide"]}>{fullPhone}</p>
          </a>
          <br />
          <a
            className={styles["a-container"]}
            href="mailto:filip.helikar@seznam.cz"
          >
            <div style={{ fontSize: "24px" }}>
              <IoIosMail />
            </div>
            <p className={styles["visible"]} ref={refEmail}>
              {email}
            </p>
            <p className={styles["hide"]}>{fullEmail}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
