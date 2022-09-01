import { useEffect } from "react";
import { isMobile } from "../../constants";
import { Colors } from "../../enums/Colors";
import { useAppSelector } from "../../hooks/reduxHooks";
import useOnKeyDown from "../../hooks/useOneKeyDown";
import styles from "./ContinueScreen.module.css";

const ContinueScreen = () => {
  const score = useAppSelector((state) => state.snakeReducer.score);
  const bestScore = useAppSelector((state) => state.snakeReducer.bestScore);

  const keyDownData = useOnKeyDown({ requestedKeys: "Tab" });

  useEffect(() => {
    if (keyDownData.key === "Tab") {
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

      {isMobile ? (
        <a
          href="https://github.com/IlyaAgarishev/react-gameboy"
          target="_blank"
        >
          Tap to see the
          <span style={{ color: "#afafaf" }}> github</span> project
        </a>
      ) : (
        <div>
          Press <span className={styles.spaceButtonOnScreen}>"Tab"</span> to see
          the
          <span style={{ color: "#afafaf" }}> github</span> project
        </div>
      )}
    </div>
  );
};

export default ContinueScreen;
