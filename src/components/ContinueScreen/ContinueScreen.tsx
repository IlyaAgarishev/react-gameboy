import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./ContinueScreen.module.css";

const ContinueScreen = () => {
  const score = useAppSelector((state) => state.snakeReducer.score);

  return (
    <div className={styles.continueScreen}>
      <div>
        Your score is <span>{score}</span>
      </div>
      <div>
        Press <span className={styles.spaceButtonOnScreen}>"Space"</span> to
        start again
      </div>
    </div>
  );
};

export default ContinueScreen;
