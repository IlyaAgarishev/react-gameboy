import { useEffect, useState } from "react";
import { useAppSelector } from "../reduxHooks";
import {
  checkIfSnakeIsOutOfHorizontalRange,
  checkIfSnakeIsOutOfVerticalRange,
} from "./utils-use-snake-is-out-of-range";

type HookReturns = {
  snakeIsOutOfRange: boolean;
  setSnakeIsOutOfRange: (snakeIsOutOfRange: boolean) => void;
};

const useSnakeIsOutOfRange = (): HookReturns => {
  const coordinates = useAppSelector((state) => state.snakeReducer.coordinates);
  const [snakeIsOutOfRange, setSnakeIsOutOfRange] = useState(false);

  useEffect(() => {
    // Getting last coordinate of the snake
    const lastCoordinate = coordinates[coordinates.length - 1];

    // Getting penultimat coordinate of the snake
    const penultimateCoordinate = coordinates[coordinates.length - 2];

    const snakeIsOutOfVerticalRange = checkIfSnakeIsOutOfVerticalRange({
      lastCoordinate,
      penultimateCoordinate,
    });

    const snakeIsOutOfHorizontalRange = checkIfSnakeIsOutOfHorizontalRange({
      lastCoordinate,
    });

    if (snakeIsOutOfVerticalRange || snakeIsOutOfHorizontalRange) {
      setSnakeIsOutOfRange(true);
    }
  }, [coordinates]);

  return { snakeIsOutOfRange, setSnakeIsOutOfRange };
};

export default useSnakeIsOutOfRange;
