import useLastControlKeyPressed from "../useLastControlKeyPressed";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import snakeSlice from "../../store/reducers/snakeSlice";
import { isControlKey } from "../useLastControlKeyPressed/utils-use-last-control-key-pressed";
import { useCallback } from "react";
import {
  getDirection,
  getIncreasedCoordinates,
} from "./utils-use-snake-motion";

const useSnakeMotion = () => {
  const { coordinates } = useAppSelector((state) => state.snakeReducer);
  const dispatch = useAppDispatch();
  const { setCoordinatesAction } = snakeSlice.actions;

  const { lastControlKeyPressed } = useLastControlKeyPressed();

  const changeSnakeCoordinates = (coordinateNumber: number) => {
    const newCoordinates = [...coordinates];
    newCoordinates.shift();
    const coordinateToPush =
      newCoordinates[newCoordinates.length - 1] + coordinateNumber;
    newCoordinates.push(coordinateToPush);

    dispatch(setCoordinatesAction(newCoordinates));
  };

  const increaseTheSizeOfSnake = useCallback(() => {
    const coordinateNumber = getDirection(lastControlKeyPressed);
    const increasedCoordinates = getIncreasedCoordinates(
      coordinates,
      coordinateNumber
    );

    dispatch(setCoordinatesAction(increasedCoordinates));
  }, [lastControlKeyPressed, coordinates]);

  const changeSnakeDirection = (key: string) => {
    if (isControlKey(key)) {
      changeSnakeCoordinates(getDirection(key));
    }
  };

  const moveTheSnakeByOneSquare = () => {
    changeSnakeCoordinates(getDirection(lastControlKeyPressed));
  };

  return {
    increaseTheSizeOfSnake,
    changeSnakeDirection,
    moveTheSnakeByOneSquare,
  };
};

export default useSnakeMotion;
