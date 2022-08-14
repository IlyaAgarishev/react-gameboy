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
import ControlKey from "../../models/ControlKey";

// describes 3 functions related to motion:
// 1) increaseTheSizeOfSnake
// 2) changeSnakeDirection
// 3) moveTheSnakeByOneSquare
const useSnakeMotion = (lastControlKeyPressed: ControlKey) => {
  const coordinates = useAppSelector((state) => state.snakeReducer.coordinates);
  const dispatch = useAppDispatch();
  const { setCoordinatesAction } = snakeSlice.actions;

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
