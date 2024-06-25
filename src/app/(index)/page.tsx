import styles from "./page.module.css"


const Page = () => {

  return (
    <div className={styles["main"]}>
      <div className={styles["img-container"]}>
        <img className={styles["img"]} src="/img/ai_img.jpg" alt="to do udelat alt" />
      </div>
    </div>
  );
};

export default Page;

