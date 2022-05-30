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

const generateRandomFoodCoordinate = (): number => {
  return Math.floor(Math.random() * 144);
};

const useSnake = () => {
  const [coordinates, setCoordinates] = useState([0, 1, 2, 3]);
  const [keyPressed, setKeyPressed] = useState("");
  const [randomFoodCoordinate, setRandomFoodCoordinate] = useState<number>(
    generateRandomFoodCoordinate()
  );
  const lastControlKeyPressed = useLastControlKeyPressed();

  const changeSnakeCoordinates = (coordinateNumber: number) => {
    const newCoordinates = [...coordinates];
    newCoordinates.shift();
    const coordinateToPush =
      newCoordinates[newCoordinates.length - 1] + coordinateNumber;
    newCoordinates.push(coordinateToPush);

    setCoordinates(newCoordinates);
  };

  const increaseTheSizeOfSnake = (coordinateNumber: number) => {
    const newCoordinates = [...coordinates];
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

  const moveTheSnakeByOneSquare = () => {
    changeSnakeCoordinates(getDirection(lastControlKeyPressed));
  };

  // Keep snake moving
  useEffect(() => {
    const interval = setInterval(() => {
      moveTheSnakeByOneSquare();
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [coordinates, lastControlKeyPressed]);

  // Change snake direction onkeydown
  useEffect(() => {
    const onKeyDown = ({ key }: any) => {
      setKeyPressed(key);
      changeSnakeDirection(key);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [coordinates]);

  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    if (lastSnakeCoordinate === randomFoodCoordinate) {
      setRandomFoodCoordinate(generateRandomFoodCoordinate());

      if (isControlKey(keyPressed)) {
        increaseTheSizeOfSnake(getDirection(keyPressed));
      }
    }
  }, [coordinates, keyPressed, randomFoodCoordinate]);

  // Return the object from hook
  return { coordinates, randomFoodCoordinate };
};

export default useSnake;
