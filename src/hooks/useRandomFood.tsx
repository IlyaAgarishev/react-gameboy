import { useState } from "react";
import { matrix, sizeOfMatrix } from "../constants";

const generateRandomCoordinate = (coordinates: number[]): number => {
  const matrixWithoutSnakeCoordinates = matrix.filter(
    (el) => !coordinates.includes(el)
  );

  const randomIndex = Math.floor(
    Math.random() * matrixWithoutSnakeCoordinates.length
  );

  return matrixWithoutSnakeCoordinates[randomIndex];
};

const useRandomFoodCoordinate = (coordinates: number[]) => {
  const [randomFoodCoordinate, setRandomFoodCoordinate] = useState<number>(
    generateRandomCoordinate(coordinates)
  );

  const generateRandomFoodCoordinate = () => {
    const randomeCoordinate = generateRandomCoordinate(coordinates);
    setRandomFoodCoordinate(randomeCoordinate);
  };

  return { randomFoodCoordinate, generateRandomFoodCoordinate };
};

export default useRandomFoodCoordinate;
