import { matrix } from "../../constants";
import styles from "./HomeScreen.module.css";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import useOnKeyDown from "../../hooks/useOnKeyDown";

interface IHomeScreen {
  setGameIsStarted: Dispatch<SetStateAction<boolean>>;
}

const HomeScreen: React.FC<IHomeScreen> = ({ setGameIsStarted }) => {
  const keydwon = useOnKeyDown({ requestedKeys: "Space" });

  useEffect(() => {
    if (keydwon.key === "Space") {
      setGameIsStarted(true);
    }
  }, [keydwon]);

  return (
    <>
      <div className={styles.homeScreen}>
        <div className={styles.startWordsWrapper}>
          <small>Press "Space" to start</small>
        </div>
      </div>
      <div className={styles.snakeScreenMock}>
        {matrix.map((el, index) => (
          <div key={index} />
        ))}
      </div>
    </>
  );
};

export default React.memo(HomeScreen);
