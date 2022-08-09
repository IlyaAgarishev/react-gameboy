import useLastControlKeyPressed from "../useLastControlKeyPressed";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import snakeSlice from "../../store/reducers/snakeSlice";
import { isControlKey } from "../useLastControlKeyPressed/utils-use-last-control-key-pressed";
import { useCallback } from "react";
import {
  getDirection,
  getIncreasedCoordinates,
  sliceFirstThanAddNewAndGetNewCoordinates,
} from "./utils-use-snake-motion";

const useSnakeMotion = () => {
  const { coordinates } = useAppSelector((state) => state.snakeReducer);
  const dispatch = useAppDispatch();
  const { setCoordinatesAction } = snakeSlice.actions;

  const { lastControlKeyPressed } = useLastControlKeyPressed();

  const changeSnakeCoordinates = useCallback(
    (coordinateNumber: number) => {
      const newCoordinates = sliceFirstThanAddNewAndGetNewCoordinates(
        coordinates,
        coordinateNumber
      );

      dispatch(setCoordinatesAction(newCoordinates));
    },
    [coordinates]
  );

  const increaseTheSizeOfSnake = useCallback(() => {
    const coordinateNumber = getDirection(lastControlKeyPressed);
    const increasedCoordinates = getIncreasedCoordinates(
      coordinates,
      coordinateNumber
    );

    dispatch(setCoordinatesAction(increasedCoordinates));
  }, [lastControlKeyPressed, coordinates]);

  const changeSnakeDirection = useCallback(
    (key: string) => {
      if (isControlKey(key)) {
        changeSnakeCoordinates(getDirection(key));
      }
    },
    [changeSnakeCoordinates]
  );

  const moveTheSnakeByOneSquare = useCallback(() => {
    changeSnakeCoordinates(getDirection(lastControlKeyPressed));
  }, [lastControlKeyPressed, changeSnakeCoordinates]);

  return {
    increaseTheSizeOfSnake,
    changeSnakeDirection,
    moveTheSnakeByOneSquare,
  };
};

export default useSnakeMotion;
