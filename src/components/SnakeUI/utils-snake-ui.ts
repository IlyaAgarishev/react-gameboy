import { Colors } from "../../enums/Colors";
import styles from "./SnakeUI.module.css";

enum EnvironmentColors {
  SquareBackground = "#3A3C39",
  SquareBorder = "#333532",
}

// getBorder logic
export const getBorder = (snakeIsStopped: boolean): string => {
  if (snakeIsStopped) {
    return `1px solid ${Colors.Red}`;
  }

  return `1px solid ${EnvironmentColors.SquareBorder}`;
};

// getBackground logic
interface IGetBackground {
  randomFoodCoordinate: number;
  coordinates: number[];
  index: number;
  randomFoodColor: Colors;
  snakeColor: Colors;
}

export const getBackground = ({
  randomFoodCoordinate,
  coordinates,
  index,
  randomFoodColor,
  snakeColor,
}: IGetBackground): string => {
  if (coordinates.some((cordinate) => cordinate === index)) {
    return snakeColor;
  }

  if (randomFoodCoordinate === index) {
    return randomFoodColor;
  }

  return EnvironmentColors.SquareBackground;
};

// getClassName logic
interface IGetClassName {
  coordinates: number[];
  index: number;
  snakeIsStopped: boolean;
}

export const getClassName = ({
  coordinates,
  snakeIsStopped,
  index,
}: IGetClassName) => {
  if (coordinates.some((cordinate) => cordinate === index) && snakeIsStopped) {
    return styles.snakeBlinks;
  }
};
