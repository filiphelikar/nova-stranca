"use client"
import style from './Footer.module.css';
import { useTextRender } from "../../utils/useTextRender"

const Footer = () => {

  const [text, fullText, ref] = useTextRender("© 2024 Filip Helikar")
  

  return (
    <footer className={style.footer} >
      <p ref={ref} >{text}</p>
      <p style={{display: "none"}}>{fullText}</p>
    </footer>
  );
};

export default Footer;

