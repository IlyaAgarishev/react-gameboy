import { useState } from "react";

const generateRandomCoordinate = (): number => {
  return Math.floor(Math.random() * 144);
};

const useRandomFoodCoordinate = () => {
  const [randomFoodCoordinate, setRandomFoodCoordinate] = useState<number>(
    generateRandomCoordinate()
  );

  const generateRandomFoodCoordinate = () => {
    setRandomFoodCoordinate(generateRandomCoordinate());
  };

  return { randomFoodCoordinate, generateRandomFoodCoordinate };
};

export default useRandomFoodCoordinate;
