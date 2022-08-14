import { useCallback, useState } from "react";
import { Colors } from "../../../enums/Colors";
import { useAppSelector } from "../../reduxHooks";
import { getRandomCoordinate, getRandomColor } from "./utils-use-random-food";

const useRandomFoodCoordinate = () => {
  const coordinates = useAppSelector((state) => state.snakeReducer.coordinates);
  const [randomFoodColor, setRandomFoodColor] = useState<Colors>(
    getRandomColor()
  );

  const [randomFoodCoordinate, setRandomFoodCoordinate] = useState<number>(
    getRandomCoordinate(coordinates)
  );

  const generateRandomFoodCoordinate = useCallback(() => {
    const randomCoordinate = getRandomCoordinate(coordinates);
    setRandomFoodCoordinate(randomCoordinate);

    const randomColor = getRandomColor();
    setRandomFoodColor(randomColor);
  }, [coordinates]);

  return {
    randomFoodCoordinate,
    generateRandomFoodCoordinate,
    randomFoodColor,
  };
};

export default useRandomFoodCoordinate;
