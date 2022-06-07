import { useEffect } from "react";
import useSnake from "../../hooks/useSnake";
import useRandomFood from "../../hooks/useSnakeIsOutOfRange copy";
import { getBackground, getBorder, getClassName } from "./utils-snake-ui";

const SnakeUI = () => {
  const { coordinates, randomFoodCoordinate, snakeIsStopped, randomFoodColor } =
    useSnake();

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
