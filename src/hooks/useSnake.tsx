import { useEffect, useMemo, useState } from "react";
import ControlKey from "../models/ControlKey";
import Directions from "../models/Directions";
import useLastControlKeyPressed from "./useLastControlKeyPressed";
import { isControlKey } from "./useLastControlKeyPressed/utils-hook_useLastControlKeyPressed";

const directions: Directions = {
  ArrowUp: -12,
  ArrowDown: 12,
  ArrowRight: 1,
  ArrowLeft: -1,
};

const useSnake = () => {
  const [coordinates, setCoordinates] = useState([0, 1, 2, 3]);
  const lastControlKeyPressed = useLastControlKeyPressed();

  const changeSnakeCoordinates = (coordinateNumber: number) => {
    const newCoordinates = [...coordinates];
    newCoordinates.shift();
    const coordinateToPush =
      newCoordinates[newCoordinates.length - 1] + coordinateNumber;
    newCoordinates.push(coordinateToPush);

    setCoordinates(newCoordinates);
  };

  const getDirection = (key: ControlKey) => {
    return directions[key];
  };

  const changeSnakeDirection = (key: string) => {
    if (isControlKey(key)) {
      changeSnakeCoordinates(getDirection(key));
    }
  };

  const moveTheSnake = () => {
    changeSnakeCoordinates(getDirection(lastControlKeyPressed));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveTheSnake();
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [coordinates, lastControlKeyPressed]);

  useEffect(() => {
    document.onkeydown = ({ key }) => {
      changeSnakeDirection(key);
    };
  }, [coordinates]);

  return { coordinates };
};

export default useSnake;
