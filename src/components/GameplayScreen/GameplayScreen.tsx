import { matrix } from "../../constants";
import useSnake from "../../hooks/useSnake";
import { getGameSquareData } from "./utils-gameplay-screen";
import styles from "./GameplayScreen.module.css";
import React from "react";

interface IGameplayScreen {
  blur: boolean;
}

const GameplayScreen: React.FC<IGameplayScreen> = ({ blur }) => {
  const snakeData = useSnake();

  return (
    <div
      className={styles.gameplayScreen}
      style={{ filter: blur ? "blur(6px)" : "none" }}
    >
      {matrix.map((el, index) => {
        const { background, border, className } = getGameSquareData({
          index,
          ...snakeData,
        });

        return (
          <div
            key={index}
            className={className}
            style={{
              background,
              border,
            }}
          />
        );
      })}
    </div>
  );
};

export default React.memo(GameplayScreen);
