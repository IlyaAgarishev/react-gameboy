import { useEffect } from "react";
import { Colors } from "../../enums/Colors";
import { useAppSelector } from "../../hooks/reduxHooks";
import useOnKeyDown from "../../hooks/useOnKeyDown";
import styles from "./ContinueScreen.module.css";

const ContinueScreen = () => {
  const score = useAppSelector((state) => state.snakeReducer.score);
  const bestScore = useAppSelector((state) => state.snakeReducer.bestScore);
  const keyDownData = useOnKeyDown();

  useEffect(() => {
    if (keyDownData.key === "g") {
      window.open("https://github.com/IlyaAgarishev/react-gameboy", "_blank");
    }
  }, [keyDownData]);

  return (
    <div className={styles.continueScreen}>
      <div>
        Your score is: <span style={{ color: Colors.Green }}>{score}</span>
      </div>
      <div>
        Best score: <span style={{ color: Colors.Yellow }}>{bestScore}</span>
      </div>
      <div>
        Press <span className={styles.spaceButtonOnScreen}>"Space"</span> to
        start again
      </div>
      <div>
        Press <span className={styles.spaceButtonOnScreen}>"G"</span> to see the
        <span style={{ color: "#afafaf" }}> github</span> project
      </div>
    </div>
  );
};

export default ContinueScreen;
