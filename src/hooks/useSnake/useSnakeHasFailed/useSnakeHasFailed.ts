import { useEffect } from "react";
import snakeSlice from "../../../store/reducers/snakeSlice";
import { useAppDispatch, useAppSelector } from "../../reduxHooks";
import {
  checkIfSnakeIsOutOfHorizontalRange,
  checkIfSnakeIsOutOfVerticalRange,
  getCoordinatesWithoutTheLastOne,
} from "./utils-use-snake-has-failed";

const useSnakeHasFailed = () => {
  const coordinates = useAppSelector((state) => state.snakeReducer.coordinates);
  const { setSnakeHasFailedAction } = snakeSlice.actions;
  const dispatch = useAppDispatch();

  // "Snake Is Out Of Range" logic
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

  // "Snake bites itself" logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    const coordinatesWithoutTheLastOne =
      getCoordinatesWithoutTheLastOne(coordinates);

    const snakeBitesItself = coordinatesWithoutTheLastOne.some(
      (coordinate) => coordinate === lastSnakeCoordinate
    );

    if (snakeBitesItself) {
      dispatch(setSnakeHasFailedAction(true));
    }
  }, [coordinates]);
};

export default useSnakeHasFailed;
