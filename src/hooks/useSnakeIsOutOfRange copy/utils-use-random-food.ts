import { matrix } from "../../constants";
import { Colors } from "../../enums/Colors";

export const getRandomColor = (): Colors => {
  const randomColorIndex = Math.floor(
    Math.random() * Object.keys(Colors).length
  );

  return Object.values(Colors)[randomColorIndex];
};

export const getRandomCoordinate = (coordinates: number[]): number => {
  const matrixWithoutSnakeCoordinates = matrix.filter(
    (el) => !coordinates.includes(el)
  );

  const randomIndex = Math.floor(
    Math.random() * matrixWithoutSnakeCoordinates.length
  );

  return matrixWithoutSnakeCoordinates[randomIndex];
};
