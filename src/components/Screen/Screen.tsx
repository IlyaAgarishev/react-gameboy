import SnakeUI from "../SnakeUI";
import styles from "./Screen.module.css";

const Screen = () => {
  return (
    <div className={styles.screenWrapper}>
      <div className={styles.battery} />
      <div className={styles.screen}>
        <SnakeUI />
      </div>
    </div>
  );
};

export default Screen;
