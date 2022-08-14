import { useEffect } from "react";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import useRandomFoodCoordinate from "./useRandomFood";
import useSnakeColor from "./useSnakeColor";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import snakeSlice from "../store/reducers/snakeSlice";
import { defaultCoordinates } from "../models/SnakeState";
import useSnakeMotion from "./useSnakeMotion";
import useSnakeHasFailed from "./useSnakeHasFailed";

const useSnake = () => {
  const dispatch = useAppDispatch();
  const { setCoordinatesAction, incrementScoreAction, clearScoreAction } =
    snakeSlice.actions;
  const coordinates = useAppSelector((state) => state.snakeReducer.coordinates);
  const snakeHasFailed = useAppSelector(
    (state) => state.snakeReducer.snakeHasFailed
  );

  const { lastControlKeyPressed, setDefaultLastControlKeyPressed } =
    useLastControlKeyPressed();

  const {
    increaseTheSizeOfSnake,
    changeSnakeDirection,
    moveTheSnakeByOneSquare,
  } = useSnakeMotion(lastControlKeyPressed);

  const { snakeColor, setSnakeColor } = useSnakeColor();

  const {
    randomFoodCoordinate,
    generateRandomFoodCoordinate,
    randomFoodColor,
  } = useRandomFoodCoordinate();

  // listening if snake is failed
  useSnakeHasFailed();

  // Keep snake moving
  useEffect(() => {
    if (!snakeHasFailed) {
      const interval = setInterval(() => {
        moveTheSnakeByOneSquare();
      }, 120);

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

  // Back to default coordinates when snake is not failed
  useEffect(() => {
    if (!snakeHasFailed) {
      setDefaultLastControlKeyPressed();
      generateRandomFoodCoordinate();
      dispatch(setCoordinatesAction(defaultCoordinates));
      dispatch(clearScoreAction());
    }
  }, [snakeHasFailed]);

  // Return the object from the hook
  return {
    randomFoodCoordinate,
    randomFoodColor,
    snakeColor,
    coordinates,
    snakeHasFailed,
  };
};

export default useSnake;
