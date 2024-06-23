import styles from "./page.module.css"
import AsciiArt from "./_AsciiArt/AsciiArt";

const Page = () => {

  return (
    <div className={styles["main"]}>
          <AsciiArt />
    </div>
  );
};

export default Page;

