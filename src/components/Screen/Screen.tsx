import { useAppSelector } from "../../hooks/reduxHooks";
import ContinueScreen from "../ContinueScreen";
import GameplayScreen from "../GameplayScreen";
import styles from "./Screen.module.css";

const Screen = () => {
  const snakeHasFailed = useAppSelector(
    (state) => state.snakeReducer.snakeHasFailed
  );

  return (
    <div className={styles.screenWrapper}>
      <div className={styles.battery} />
      <div className={styles.screen}>
        {snakeHasFailed && <ContinueScreen />}
        <GameplayScreen blur={snakeHasFailed} />
      </div>
    </div>
  );
};

export default Screen;
