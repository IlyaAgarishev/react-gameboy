import { useState } from "react";
import { matrix } from "../../constants";
import { Colors } from "../../enums/Colors";
import { getRandomCoordinate, getRandomColor } from "./utils-use-random-food";

const useRandomFoodCoordinate = (coordinates: number[]) => {
  const [randomFoodColor, setRandomFoodColor] = useState<Colors>(
    getRandomColor()
  );

  const [randomFoodCoordinate, setRandomFoodCoordinate] = useState<number>(
    getRandomCoordinate(coordinates)
  );

  const generateRandomFoodCoordinate = () => {
    const randomCoordinate = getRandomCoordinate(coordinates);
    setRandomFoodCoordinate(randomCoordinate);

    const randomColor = getRandomColor();
    setRandomFoodColor(randomColor);
  };

  return {
    randomFoodCoordinate,
    generateRandomFoodCoordinate,
    randomFoodColor,
  };
};

export default useRandomFoodCoordinate;
