import { useEffect, useState } from "react";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import useRandomFoodCoordinate from "./useRandomFood";
import useSnakeIsOutOfRange from "./useSnakeIsOutOfRange";
import useSnakeColor from "./useSnakeColor";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import snakeSlice from "../store/reducers/snakeSlice";
import { Coordinates, defaultCoordinates } from "../models/SnakeState";
import useSnakeMotion from "./useSnakeMotion";

const getCoordinatesWithoutTheLastOne = (coordinates: Coordinates) => {
  const copiedCoordinates = [...coordinates];
  copiedCoordinates.pop();

  return copiedCoordinates;
};

const useSnake = () => {
  const { coordinates } = useAppSelector((state) => state.snakeReducer);
  const dispatch = useAppDispatch();
  const { setCoordinatesAction, incrementScoreAction, clearScoreAction } =
    snakeSlice.actions;

  const { lastControlKeyPressed, setDefaultLastControlKeyPressed } =
    useLastControlKeyPressed();

  const {
    increaseTheSizeOfSnake,
    changeSnakeDirection,
    moveTheSnakeByOneSquare,
  } = useSnakeMotion(lastControlKeyPressed);

  const [snakeHasFailed, setSnakeHasFailed] = useState(false);

  const { snakeColor, setSnakeColor } = useSnakeColor();

  const {
    randomFoodCoordinate,
    generateRandomFoodCoordinate,
    randomFoodColor,
  } = useRandomFoodCoordinate();
  const { snakeIsOutOfRange, setSnakeIsOutOfRange } = useSnakeIsOutOfRange();

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
      dispatch(incrementScoreAction());
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
        setSnakeIsOutOfRange(false);
        setSnakeHasFailed(false);
        generateRandomFoodCoordinate();
      }, 3000);
    }
  }, [coordinates, snakeIsOutOfRange]);

  // Back to default coordinates when snake is not stopped
  useEffect(() => {
    if (!snakeHasFailed) {
      dispatch(setCoordinatesAction(defaultCoordinates));
      dispatch(clearScoreAction());
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
