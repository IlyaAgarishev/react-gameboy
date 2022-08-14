import { matrix } from "../../../constants";
import { Coordinates } from "../../../models/SnakeState";

interface ICheckIfSnakeIsOutOfVerticalRange {
  lastCoordinate: number;
  penultimateCoordinate: number;
}

export const checkIfSnakeIsOutOfVerticalRange = ({
  lastCoordinate,
  penultimateCoordinate,
}: ICheckIfSnakeIsOutOfVerticalRange): boolean => {
  if (lastCoordinate % 12 === 0 && penultimateCoordinate % 3 === 2) {
    return true;
  }

  if (penultimateCoordinate % 12 === 0 && lastCoordinate % 3 === 2) {
    return true;
  }

  return false;
};

interface ICheckIfSnakeIsOutOfHorizontalRange {
  lastCoordinate: number;
}

export const checkIfSnakeIsOutOfHorizontalRange = ({
  lastCoordinate,
}: ICheckIfSnakeIsOutOfHorizontalRange): boolean => {
  if (matrix[lastCoordinate] === undefined) {
    return true;
  }

  return false;
};

// Удаляем последнюю координату и возвращаем новый массив
export const getCoordinatesWithoutTheLastOne = (coordinates: Coordinates) => [
  ...coordinates.slice(0, -1),
];
