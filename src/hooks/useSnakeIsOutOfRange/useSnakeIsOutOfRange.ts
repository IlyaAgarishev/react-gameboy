import { useEffect, useState } from "react";
import {
  checkIfSnakeIsOutOfHorizontalRange,
  checkIfSnakeIsOutOfVerticalRange,
} from "./utils-use-snake-is-out-of-range";

type HookReturns = {
  snakeIsOutOfRange: boolean;
  setDefaultSnakeIsOutOfRange: () => void;
};

const useSnakeIsOutOfRange = (coordinates: number[]): HookReturns => {
  const [snakeIsOutOfRange, setSnakeIsOutOfRange] = useState(false);

  const setDefaultSnakeIsOutOfRange = () => {
    setSnakeIsOutOfRange(false);
  };

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

  return { snakeIsOutOfRange, setDefaultSnakeIsOutOfRange };
};

export default useSnakeIsOutOfRange;
