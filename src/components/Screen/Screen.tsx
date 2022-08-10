import ContinueScreen from "../ContinueScreen";
import GameplayScreen from "../GameplayScreen";
import styles from "./Screen.module.css";

const Screen = () => {
  return (
    <div className={styles.screenWrapper}>
      <div className={styles.battery} />
      <div className={styles.screen}>
        <ContinueScreen />
        <GameplayScreen blur={true} />
      </div>
    </div>
  );
};

export default Screen;
