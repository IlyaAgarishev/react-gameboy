import { useEffect, useMemo, useState } from "react";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import { isControlKey } from "./useLastControlKeyPressed/utils-hook_useLastControlKeyPressed";
import Snake from "../classes/Snake";

const generateRandomFoodCoordinate = (): number => {
  return Math.floor(Math.random() * 144);
};

const getCoordinatesWithoutTheLastOne = (coordinates: number[]) => {
  const copiedCoordinates = [...coordinates];
  copiedCoordinates.pop();

  return copiedCoordinates;
};

const defaultCoordinates = [0, 1, 2, 3];

const useSnake = () => {
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [snakeIsStopped, setSnakeIsStopped] = useState(false);
  const { lastControlKeyPressed, setDefaultLastControlKeyPressed } =
    useLastControlKeyPressed();
  const [keyPressed, setKeyPressed] = useState("");
  const [randomFoodCoordinate, setRandomFoodCoordinate] = useState<number>(
    generateRandomFoodCoordinate()
  );

  console.log();

  const snake = new Snake({
    coordinates,
    setCoordinates,
    lastControlKeyPressed,
  });

  // Keep snake moving
  useEffect(() => {
    if (!snakeIsStopped) {
      const interval = setInterval(() => {
        snake.moveTheSnakeByOneSquare();
      }, 150);

      return () => {
        clearInterval(interval);
      };
    }
  }, [coordinates, lastControlKeyPressed, snakeIsStopped]);

  // Change snake direction onkeydown
  useEffect(() => {
    if (!snakeIsStopped) {
      const onKeyDown = ({ key }: any) => {
        setKeyPressed(key);
        snake.changeSnakeDirection(key);
      };

      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [coordinates, snakeIsStopped]);

  // Snake Eating logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    if (lastSnakeCoordinate === randomFoodCoordinate) {
      setRandomFoodCoordinate(generateRandomFoodCoordinate());

      if (isControlKey(keyPressed)) {
        snake.increaseTheSizeOfSnake(snake.getDirection(keyPressed));
      }
    }
  }, [coordinates, keyPressed, randomFoodCoordinate]);

  // Snake bites itself logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    const coordinatesWithoutTheLastOne =
      getCoordinatesWithoutTheLastOne(coordinates);

    const snakeBitesItself = coordinatesWithoutTheLastOne.some(
      (coordinate) => coordinate === lastSnakeCoordinate
    );

    if (snakeBitesItself) {
      setSnakeIsStopped(true);

      setTimeout(() => {
        setCoordinates(defaultCoordinates);
        setDefaultLastControlKeyPressed();
        setSnakeIsStopped(false);
        setRandomFoodCoordinate(generateRandomFoodCoordinate());
      }, 3000);
    }
  }, [coordinates]);

  // Return the object from hook
  return { coordinates, randomFoodCoordinate, snakeIsStopped };
};

export default useSnake;
