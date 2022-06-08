import { useEffect } from "react";
import useSnake from "../../hooks/useSnake";
import { getBackground, getBorder, getClassName } from "./utils-snake-ui";

const SnakeUI = () => {
  const {
    coordinates,
    randomFoodCoordinate,
    snakeIsStopped,
    randomFoodColor,
    snakeColor,
  } = useSnake();

  return (
    <>
      {Array(144)
        .fill("")
        .map((el, index) => {
          const background = getBackground({
            coordinates,
            index,
            randomFoodCoordinate,
            randomFoodColor,
            snakeColor,
            snakeIsStopped,
          });
          const border = getBorder(snakeIsStopped);
          const className = getClassName({
            coordinates,
            snakeIsStopped,
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
