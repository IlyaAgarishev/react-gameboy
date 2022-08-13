import { matrix } from "../../constants";
import useSnake from "../../hooks/useSnake";
import {
  getBackground,
  getBorder,
  getClassName,
} from "./utils-gameplay-screen";
import styles from "./GameplayScreen.module.css";
import React from "react";

interface IGameplayScreen {
  blur: boolean;
}

const GameplayScreen: React.FC<IGameplayScreen> = ({ blur }) => {
  const {
    coordinates,
    randomFoodCoordinate,
    snakeHasFailed,
    randomFoodColor,
    snakeColor,
  } = useSnake();

  return (
    <div
      className={styles.gameplayScreen}
      style={{ filter: blur ? "blur(6px)" : "none" }}
    >
      {matrix.map((el, index) => {
        const background = getBackground({
          coordinates,
          index,
          randomFoodCoordinate,
          randomFoodColor,
          snakeColor,
          snakeHasFailed,
        });
        const border = getBorder(snakeHasFailed);
        const className = getClassName({
          coordinates,
          snakeHasFailed,
          index,
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
