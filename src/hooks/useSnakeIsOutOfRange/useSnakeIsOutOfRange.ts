import { useEffect } from "react";
import snakeSlice from "../../store/reducers/snakeSlice";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import {
  checkIfSnakeIsOutOfHorizontalRange,
  checkIfSnakeIsOutOfVerticalRange,
} from "./utils-use-snake-is-out-of-range";

const useSnakeIsOutOfRange = () => {
  const coordinates = useAppSelector((state) => state.snakeReducer.coordinates);
  const { setSnakeHasFailedAction } = snakeSlice.actions;
  const dispatch = useAppDispatch();

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
      dispatch(setSnakeHasFailedAction(true));
    }
  }, [coordinates]);
};

export default useSnakeIsOutOfRange;
