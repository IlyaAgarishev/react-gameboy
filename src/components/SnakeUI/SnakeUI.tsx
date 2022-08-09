import { matrix } from "../../constants";
import useSnake from "../../hooks/useSnake";
import { getBackground, getBorder, getClassName } from "./utils-snake-ui";

const SnakeUI = () => {
  const {
    coordinates,
    randomFoodCoordinate,
    snakeHasFailed,
    randomFoodColor,
    snakeColor,
  } = useSnake();

  return (
    <>
      {matrix.map((el, index) => {
        const background = getBackground({
          coordinates,
          index,
          randomFoodCoordinate,
          randomFoodColor,
          snakeColor,
          snakeHasFailed,
        });
        const border = getBorder(snakeHasFailed);
        const className = getClassName({
          coordinates,
          snakeHasFailed,
          index,
        });

        return (
          <div
            key={index}
            className={className}
            style={{
              background,
              border,
            }}
          />
        );
      })}
    </>
  );
};

export default SnakeUI;
