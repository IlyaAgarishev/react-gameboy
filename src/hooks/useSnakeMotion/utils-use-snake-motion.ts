import ControlKey from "../../models/ControlKey";
import Directions from "../../models/Directions";
import { Coordinates } from "../../models/SnakeState";

const directions: Directions = {
  ArrowUp: -12,
  ArrowDown: 12,
  ArrowRight: 1,
  ArrowLeft: -1,
};

export const getDirection = (key: ControlKey) => {
  return directions[key];
};

export const getIncreasedCoordinates = (
  coordinates: Coordinates,
  coordinateNumber: number
) => {
  const lastCoordinate = coordinates.length - 1;
  const brandNewCoordinate = coordinates[lastCoordinate] + coordinateNumber;

  return [...coordinates, brandNewCoordinate];
};
