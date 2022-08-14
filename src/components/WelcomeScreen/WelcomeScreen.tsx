import { matrix } from "../../constants";
import styles from "./WelcomeScreen.module.css";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import sound from "../../classes/Sound";
import useOnKeyDown from "../../hooks/useOnKeyDown";

interface IWelcomeScreen {
  setGameIsStarted: Dispatch<SetStateAction<boolean>>;
}

const WelcomeScreen: React.FC<IWelcomeScreen> = ({ setGameIsStarted }) => {
  const keydwon = useOnKeyDown();

  useEffect(() => {
    sound.play();

    if (keydwon.key !== "") {
      setGameIsStarted(true);
    }
  }, [keydwon]);

  return (
    <>
      <div className={styles.welcomeScreen}>
        <div className={styles.welcomeWordsWrapper}>
          <small>Press any button to start</small>
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

export default React.memo(WelcomeScreen);
