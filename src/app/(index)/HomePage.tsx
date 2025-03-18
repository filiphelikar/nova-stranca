"use client"
import styles from "./page.module.css"
import gsap from 'gsap';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTextRender } from "../../utils/useTextRender";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/_GlobalRedux/store';
import HTBModules from "@/components/HTBModules/HTBModules";

const HomePage = () => {

  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = useSelector((state: RootState) => state.language.translations[lang as keyof (typeof state.language.translations)])

  const [heading, _, refHeading] = useTextRender("Home:", 60);

  const [dockersHeading, __, dockersRefHeading] = useTextRender("Architecture of this web app:", 60);

  const [subheadingFilip, fullSubheadingFilip, refSubheadingFilip] = useTextRender(
    translations.home.subheadingFilip,
    60
  );

  const [infoFilip, fullInfoFilip, refInfoFilip] = useTextRender(
    translations.home.textFilip,
    10
  );

  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (entry) {
        const rect = entry.target.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isCentered = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;

        if (isCentered) {
          gsap.to("#aiImg", { duration: 0.5, filter: `blur(0px)` });
        } else {
          const value = window.scrollY;
          gsap.to("#aiImg", { duration: 0.5, filter: `blur(${value * 0.002}px)` });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [entry]);

  return (
    <div>
      <div className={styles["main"]}>
        <h2 ref={refHeading}>{heading}</h2>
        <img className={styles["avatar"]} src="/img/avatar.png" alt="avatar image of me" />
        <div className={styles["info-filip"]} >
          <div className={styles["rendered-text"]}>
            <h3 ref={refSubheadingFilip}>{subheadingFilip}</h3>
            <p ref={refInfoFilip}>{infoFilip}</p>
          </div>
          <div className={styles["place-holder"]}>
            <h3>{fullSubheadingFilip}</h3>
            <p>{fullInfoFilip}</p>
          </div>
        </div>
        <h2 ref={dockersRefHeading}>{dockersHeading}</h2>
        <div className={styles["containers"]}>
          <div className={styles["nginx-container"]}>
            <div>
              <a target="blank" href="https://github.com/filiphelikar/nginx-container/blob/main/Dockerfile" className={styles["a"]}>
                <div className={styles["background-container"]}>
                  <img src="/img/docker-nginx.png" alt="docker-nginx-arch" width="200px" className={styles["nginx"]} />
                </div>
                <div className={styles["container-info"]}>
                  <h3>Nginx</h3>
                  <p>Docker container with reverse proxy nginx</p>
                  <p>and archlinux image</p>
                </div>
              </a>
            </div>
          </div>
          <div className={styles["next-containers"]}>
            <a target="blank" href="https://github.com/filiphelikar/nova-stranca/blob/main/Dockerfile" style={{ position: "relative" }}>
              <div className={styles["background-container"]}>
                <img src="/img/docker-nextjs.png" alt="docker-nginx-arch" width="200px" className={styles["img"]} />
              </div>
              <div className={styles["container-info-next"]}>
                <h3>Next</h3>
                <p>Docker container with next app</p>
                <p>and archlinux image</p>
              </div>
            </a>
            <a target="blank" href="https://github.com/filiphelikar/nova-stranca/blob/main/Dockerfile" style={{ position: "relative" }}>
              <div className={styles["background-container"]}>
                <img src="/img/docker-nextjs.png" alt="docker-nginx-arch" width="200px" className={styles["img"]} />
              </div>
              <div className={styles["container-info-next"]}>
                <h3>Next</h3>
                <p>Docker container with next app</p>
                <p>and archlinux image</p>
              </div>
            </a>
            <a target="blank" href="https://github.com/filiphelikar/nova-stranca/blob/main/Dockerfile" style={{ position: "relative" }}>
              <div className={styles["background-container"]}>
                <img src="/img/docker-nextjs.png" alt="docker-nginx-arch" width="200px" className={styles["img"]} />
              </div>
              <div className={styles["container-info-next"]}>
                <h3>Next</h3>
                <p>Docker container with next app</p>
                <p>and archlinux image</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <HTBModules />
    </div>
  );
};

export default HomePage;