import useSnake from "../../hooks/useSnake";
import styles from "./SnakeUI.module.css";
import { getBackground, getBorder } from "./utils-snake-ui";

const SnakeUI = () => {
  const { coordinates, randomFoodCoordinate, snakeIsStopped } = useSnake();

  return (
    <>
      {Array(144)
        .fill("")
        .map((el, index) => {
          const background = getBackground({
            coordinates,
            index,
            randomFoodCoordinate,
          });
          const border = getBorder(snakeIsStopped);

          return (
            <div
              key={index}
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
