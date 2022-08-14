import { Colors } from "../../enums/Colors";
import { Coordinates } from "../../models/SnakeState";
import styles from "./GameplayScreen.module.css";

enum EnvironmentColors {
  SquareBackground = "#3A3C39",
  SquareBorder = "#333532",
}

// getBorder logic
const getBorder = (snakeHasFailed: boolean): string => {
  if (snakeHasFailed) {
    return `1px solid ${Colors.Red}`;
  }

  return `1px solid ${EnvironmentColors.SquareBorder}`;
};

// getBackground logic
interface IGetBackground {
  randomFoodCoordinate: number;
  coordinates: Coordinates;
  index: number;
  randomFoodColor: Colors;
  snakeColor: Colors;
  snakeHasFailed: boolean;
}

const getBackground = ({
  randomFoodCoordinate,
  coordinates,
  index,
  randomFoodColor,
  snakeColor,
  snakeHasFailed,
}: IGetBackground): string => {
  if (coordinates.some((cordinate) => cordinate === index)) {
    return snakeColor;
  }

  if (randomFoodCoordinate === index) {
    if (snakeHasFailed) {
      return EnvironmentColors.SquareBackground;
    }

    return randomFoodColor;
  }

  return EnvironmentColors.SquareBackground;
};

// getClassName logic
interface IGetClassName {
  coordinates: Coordinates;
  index: number;
  snakeHasFailed: boolean;
}

const getClassName = ({
  coordinates,
  snakeHasFailed,
  index,
}: IGetClassName) => {
  if (coordinates.some((cordinate) => cordinate === index) && snakeHasFailed) {
    return styles.snakeBlinks;
  }
};

interface IGetGameSquareData {
  randomFoodCoordinate: number;
  coordinates: Coordinates;
  index: number;
  randomFoodColor: Colors;
  snakeColor: Colors;
  snakeHasFailed: boolean;
}

export const getGameSquareData = ({
  randomFoodCoordinate,
  coordinates,
  index,
  randomFoodColor,
  snakeColor,
  snakeHasFailed,
}: IGetGameSquareData) => {
  const className = getClassName({ coordinates, snakeHasFailed, index });
  const border = getBorder(snakeHasFailed);
  const background = getBackground({
    randomFoodCoordinate,
    coordinates,
    index,
    randomFoodColor,
    snakeColor,
    snakeHasFailed,
  });

  return {
    background,
    border,
    className,
  };
};
