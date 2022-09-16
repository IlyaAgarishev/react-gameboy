import { matrix } from "../../constants";
import useSnake from "../../hooks/useSnake/useSnake";
import { getFilter, getGameSquareData } from "./utils-gameplay-screen";
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
      // TODO: replace by styled css
      style={{ filter: getFilter(blur) }}
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
