import React from "react";
import useSnake from "../../hooks/useSnake";
import styles from "./Screen.module.css";

const Screen: React.FC = () => {
  const { coordinates, randomFoodCoordinate, snakeIsStopped } = useSnake();

  return (
    <div className={styles.screenWrapper}>
      <div className={styles.battery} />
      <div className={styles.screen}>
        {Array(144)
          .fill("")
          .map((el, index) => {
            let background = "#3A3C39";

            if (coordinates.some((cordinate) => cordinate === index)) {
              background = "#57D99C";
            }

            if (randomFoodCoordinate === index) {
              background = "#FD0E55";
            }

            const getBorderColor = () => {
              if (snakeIsStopped) {
                return "#FD0E55";
              }

              return "#333532";
            };

            return (
              <div
                key={index}
                style={{
                  background,
                  border: `1px solid ${getBorderColor()}`,
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Screen;
