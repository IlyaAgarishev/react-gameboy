import { Colors } from "../../enums/Colors";
import styles from "./SnakeUI.module.css";

// getBorder logic
export const getBorder = (snakeIsStopped: boolean): string => {
  if (snakeIsStopped) {
    return `1px solid ${Colors.Red}`;
  }

  return `1px solid ${Colors.SquareBorder}`;
};

// getBackground logic
interface IGetBackground {
  randomFoodCoordinate: number;
  coordinates: number[];
  index: number;
}

export const getBackground = ({
  randomFoodCoordinate,
  coordinates,
  index,
}: IGetBackground): string => {
  if (coordinates.some((cordinate) => cordinate === index)) {
    return Colors.Green;
  }

  if (randomFoodCoordinate === index) {
    return Colors.Red;
  }

  return Colors.SquareBackground;
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
