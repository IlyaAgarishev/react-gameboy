import { useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import useTurnOnGameboy from "../../hooks/useTurnOnGameboy";
import ContinueScreen from "../ContinueScreen";
import GameplayScreen from "../GameplayScreen";
import WelcomeScreen from "../WelcomeScreen";
import styles from "./Screen.module.css";

const Screen = () => {
  const snakeHasFailed = useAppSelector(
    (state) => state.snakeReducer.snakeHasFailed
  );
  const [gameIsStarted, setGameIsStarted] = useState(false);

  // TODO: попробовать заменить на react-transition-group
  const { batteryIsActivated, screenIsActivated } = useTurnOnGameboy();

  return (
    <div className={styles.screenWrapper}>
      <div
        className={styles.battery}
        style={{ opacity: batteryIsActivated ? "1" : "0" }}
      />
      <div
        className={styles.screen}
        style={{ opacity: screenIsActivated ? "1" : "0" }}
      >
        {screenIsActivated && gameIsStarted ? (
          <>
            {snakeHasFailed && <ContinueScreen />}
            <GameplayScreen blur={snakeHasFailed} />
          </>
        ) : (
          <WelcomeScreen setGameIsStarted={setGameIsStarted} />
        )}
      </div>
    </div>
  );
};

export default Screen;
