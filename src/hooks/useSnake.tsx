import { useEffect, useState } from "react";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import Snake from "../classes/Snake";
import useRandomFoodCoordinate from "./useRandomFood";

const getCoordinatesWithoutTheLastOne = (coordinates: number[]) => {
  const copiedCoordinates = [...coordinates];
  copiedCoordinates.pop();

  return copiedCoordinates;
};

const defaultCoordinates = [0, 1, 2, 3];

const useSnake = () => {
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [snakeIsOutOfRange, setSnakeIsOutOfRange] = useState(false);
  const [snakeIsStopped, setSnakeIsStopped] = useState(false);
  const { lastControlKeyPressed, setDefaultLastControlKeyPressed } =
    useLastControlKeyPressed();
  const { randomFoodCoordinate, generateRandomFoodCoordinate } =
    useRandomFoodCoordinate();

  const snake = new Snake({
    coordinates,
    setCoordinates,
    lastControlKeyPressed,
  });

  // Snake is out of range logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];
    const coordinateBeforeLast = coordinates[coordinates.length - 2];

    if (lastSnakeCoordinate % 12 === 0 && coordinateBeforeLast % 3 === 2) {
      setSnakeIsOutOfRange(true);
    }

    if (coordinateBeforeLast % 12 === 0 && lastSnakeCoordinate % 3 === 2) {
      setSnakeIsOutOfRange(true);
    }

    const arr = Array(144)
      .fill("")
      .map((el, i) => i);

    if (arr[lastSnakeCoordinate] === undefined) {
      setSnakeIsOutOfRange(true);
    }
  }, [coordinates]);

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
      generateRandomFoodCoordinate();

      snake.increaseTheSizeOfSnake(snake.getDirection(lastControlKeyPressed));
    }
  }, [coordinates, randomFoodCoordinate]);

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
        setSnakeIsOutOfRange(false);
        setSnakeIsStopped(false);
        generateRandomFoodCoordinate();
      }, 3000);
    }
  }, [coordinates, snakeIsOutOfRange]);

  // Return the object from hook
  return { coordinates, randomFoodCoordinate, snakeIsStopped };
};

export default useSnake;
