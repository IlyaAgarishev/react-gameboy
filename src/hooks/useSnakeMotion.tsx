import useLastControlKeyPressed from "./useLastControlKeyPressed";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import snakeSlice from "../store/reducers/snakeSlice";
import Directions from "../models/Directions";
import ControlKey from "../models/ControlKey";
import { isControlKey } from "./useLastControlKeyPressed/utils-use-last-control-key-pressed";
import { useEffect } from "react";

const directions: Directions = {
  ArrowUp: -12,
  ArrowDown: 12,
  ArrowRight: 1,
  ArrowLeft: -1,
};

const getDirection = (key: ControlKey) => {
  return directions[key];
};

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

  const increaseTheSizeOfSnake = (coordinateNumber: number) => {
    const newCoordinates = [...coordinates];
    const coordinateToPush =
      newCoordinates[newCoordinates.length - 1] + coordinateNumber;
    newCoordinates.push(coordinateToPush);

    dispatch(setCoordinatesAction(newCoordinates));
  };

  const changeSnakeDirection = (key: string) => {
    if (isControlKey(key)) {
      changeSnakeCoordinates(getDirection(key));
    }
  };

  const moveTheSnakeByOneSquare = () => {
    changeSnakeCoordinates(getDirection(lastControlKeyPressed));
  };

  return {
    getDirection,
    increaseTheSizeOfSnake,
    changeSnakeDirection,
    moveTheSnakeByOneSquare,
  };
};

export default useSnakeMotion;
