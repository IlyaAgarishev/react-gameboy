import { useEffect, useMemo, useState } from "react";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import { isControlKey } from "./useLastControlKeyPressed/utils-hook_useLastControlKeyPressed";
import Snake from "../classes/Snake";

const generateRandomFoodCoordinate = (): number => {
  return Math.floor(Math.random() * 144);
};

const useSnake = () => {
  const [coordinates, setCoordinates] = useState([0, 1, 2, 3]);
  const lastControlKeyPressed = useLastControlKeyPressed();

  const snake = new Snake({
    coordinates,
    setCoordinates,
    lastControlKeyPressed,
  });

  const [keyPressed, setKeyPressed] = useState("");
  const [randomFoodCoordinate, setRandomFoodCoordinate] = useState<number>(
    generateRandomFoodCoordinate()
  );

  // Keep snake moving
  useEffect(() => {
    const interval = setInterval(() => {
      snake.moveTheSnakeByOneSquare();
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [coordinates, lastControlKeyPressed]);

  // Change snake direction onkeydown
  useEffect(() => {
    const onKeyDown = ({ key }: any) => {
      setKeyPressed(key);
      snake.changeSnakeDirection(key);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [coordinates]);

  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    if (lastSnakeCoordinate === randomFoodCoordinate) {
      setRandomFoodCoordinate(generateRandomFoodCoordinate());

      if (isControlKey(keyPressed)) {
        snake.increaseTheSizeOfSnake(snake.getDirection(keyPressed));
      }
    }
  }, [coordinates, keyPressed, randomFoodCoordinate]);

  // Return the object from hook
  return { coordinates, randomFoodCoordinate };
};

export default useSnake;
