import { matrix } from "../../../constants";
import { Colors } from "../../../enums/Colors";
import { Coordinates } from "../../../models/SnakeState";

export const getRandomColor = (): Colors => {
  const randomColorIndex = Math.floor(
    Math.random() * Object.keys(Colors).length
  );

  return Object.values(Colors)[randomColorIndex];
};

export const getRandomCoordinate = (coordinates: Coordinates): number => {
  const anglesCoordinates = [0, 11, 143, 132];

  // bannedCoordinates - координаты змеи и угловые координаты
  const bannedCoordinates = [...coordinates, ...anglesCoordinates];

  const matrixWithoutBannedCoordinates = matrix.filter(
    (el) => !bannedCoordinates.includes(el)
  );

  const randomIndex = Math.floor(
    Math.random() * matrixWithoutBannedCoordinates.length
  );

  return matrixWithoutBannedCoordinates[randomIndex];
};
