import { useEffect, useState } from "react";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import Snake from "../classes/Snake";
import useRandomFoodCoordinate from "./useSnakeIsOutOfRange copy/useRandomFood";
import useSnakeIsOutOfRange from "./useSnakeIsOutOfRange";
import useSnakeColor from "./useSnakeColor";

const getCoordinatesWithoutTheLastOne = (coordinates: number[]) => {
  const copiedCoordinates = [...coordinates];
  copiedCoordinates.pop();

  return copiedCoordinates;
};

const defaultCoordinates = [0, 1, 2, 3];

const useSnake = () => {
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [snakeIsStopped, setSnakeIsStopped] = useState(false);

  const { snakeColor, setSnakeColor } = useSnakeColor();
  const { lastControlKeyPressed, setDefaultLastControlKeyPressed } =
    useLastControlKeyPressed();
  const {
    randomFoodCoordinate,
    generateRandomFoodCoordinate,
    randomFoodColor,
  } = useRandomFoodCoordinate(coordinates);
  const { snakeIsOutOfRange, setDefaultSnakeIsOutOfRange } =
    useSnakeIsOutOfRange(coordinates);

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
      snake.changeSnakeDirection(lastControlKeyPressed);
    }
  }, [lastControlKeyPressed]);

  // Snake Eating logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    if (lastSnakeCoordinate === randomFoodCoordinate) {
      setSnakeColor(randomFoodColor);
      generateRandomFoodCoordinate();

      snake.increaseTheSizeOfSnake(snake.getDirection(lastControlKeyPressed));
    }
  }, [coordinates, randomFoodCoordinate, snakeColor, randomFoodColor]);

  // Snake bites itself logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    const coordinatesWithoutTheLastOne =
      getCoordinatesWithoutTheLastOne(coordinates);

    const snakeBitesItself = coordinatesWithoutTheLastOne.some(
      (coordinate) => coordinate === lastSnakeCoordinate
    );

    if (snakeBitesItself || snakeIsOutOfRange) {
      setSnakeIsStopped(true);

      setTimeout(() => {
        setCoordinates(defaultCoordinates);
        setDefaultLastControlKeyPressed();
        setDefaultSnakeIsOutOfRange();
        setSnakeIsStopped(false);
        generateRandomFoodCoordinate();
      }, 3000);
    }
  }, [coordinates, snakeIsOutOfRange]);

  // Return the object from hook
  return {
    coordinates,
    randomFoodCoordinate,
    snakeIsStopped,
    randomFoodColor,
    snakeColor,
  };
};

export default useSnake;
