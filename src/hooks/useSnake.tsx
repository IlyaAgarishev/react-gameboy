import { useEffect, useState } from "react";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import useRandomFoodCoordinate from "./useRandomFood";
import useSnakeIsOutOfRange from "./useSnakeIsOutOfRange";
import useSnakeColor from "./useSnakeColor";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import snakeSlice from "../store/reducers/snakeSlice";
import { defaultCoordinates } from "../models/SnakeState";
import useSnakeMotion from "./useSnakeMotion";

const getCoordinatesWithoutTheLastOne = (coordinates: number[]) => {
  const copiedCoordinates = [...coordinates];
  copiedCoordinates.pop();

  return copiedCoordinates;
};

const useSnake = () => {
  const { coordinates } = useAppSelector((state) => state.snakeReducer);
  const dispatch = useAppDispatch();
  const { setCoordinatesAction } = snakeSlice.actions;

  const {
    increaseTheSizeOfSnake,
    changeSnakeDirection,
    moveTheSnakeByOneSquare,
  } = useSnakeMotion();

  const [snakeHasFailed, setSnakeHasFailed] = useState(false);

  const { snakeColor, setSnakeColor } = useSnakeColor();
  const { lastControlKeyPressed, setDefaultLastControlKeyPressed } =
    useLastControlKeyPressed();
  const {
    randomFoodCoordinate,
    generateRandomFoodCoordinate,
    randomFoodColor,
  } = useRandomFoodCoordinate(coordinates);
  const { snakeIsOutOfRange, setDefaultSnakeIsOutOfRange } =
    useSnakeIsOutOfRange();

  // Keep snake moving
  useEffect(() => {
    if (!snakeHasFailed) {
      const interval = setInterval(() => {
        moveTheSnakeByOneSquare();
      }, 150);

      return () => {
        clearInterval(interval);
      };
    }
  }, [coordinates, lastControlKeyPressed, snakeHasFailed]);

  // Change snake direction onkeydown
  useEffect(() => {
    if (!snakeHasFailed) {
      changeSnakeDirection(lastControlKeyPressed);
    }
  }, [lastControlKeyPressed]);

  // Snake Eating logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    if (lastSnakeCoordinate === randomFoodCoordinate) {
      setSnakeColor(randomFoodColor);
      generateRandomFoodCoordinate();

      increaseTheSizeOfSnake();
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
      setSnakeHasFailed(true);

      setTimeout(() => {
        setDefaultLastControlKeyPressed();
        setDefaultSnakeIsOutOfRange();
        setSnakeHasFailed(false);
        generateRandomFoodCoordinate();
      }, 3000);
    }
  }, [coordinates, snakeIsOutOfRange]);

  // Back to default coordinates when snake is not stopped
  useEffect(() => {
    if (!snakeHasFailed) {
      dispatch(setCoordinatesAction(defaultCoordinates));
    }
  }, [snakeHasFailed]);

  // Return the object from hook
  return {
    coordinates,
    randomFoodCoordinate,
    snakeHasFailed,
    randomFoodColor,
    snakeColor,
  };
};

export default useSnake;
