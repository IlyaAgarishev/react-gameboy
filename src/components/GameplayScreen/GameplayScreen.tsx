import { matrix } from "../../constants";
import useSnake from "../../hooks/useSnake/useSnake";
import {
  getBorder,
  getFilter,
  getGameSquareData,
} from "./utils-gameplay-screen";
import styles from "./GameplayScreen.module.css";
import React from "react";
import Square from "../Square";

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
        // const { background, border, className } = getGameSquareData({
        //   index,
        //   ...snakeData,
        // });

        if (snakeData.coordinates.includes(index)) {
          return <Square color={snakeData.snakeColor} />;
        }

        if (snakeData.randomFoodCoordinate === index) {
          return <Square color={snakeData.randomFoodColor} />;
        }

        return <div style={{ border: getBorder(snakeData.snakeHasFailed) }} />;
      })}
    </div>
  );
};

export default React.memo(GameplayScreen);
