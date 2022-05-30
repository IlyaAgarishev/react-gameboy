import React, { useEffect, useMemo, useState } from "react";
import ControlKey from "../../models/ControlKey";
import Directions from "../../models/Directions";
import styles from "./Screen.module.css";
import { generateRandomFoodPosition } from "./screen-utils";

interface IScreen {
  lastControlKeyPressed: ControlKey;
}

const directions: Directions = {
  ArrowUp: -12,
  ArrowDown: 12,
  ArrowRight: 1,
  ArrowLeft: -1,
};

const getDirection = (key: ControlKey) => {
  return directions[key];
};

const Screen: React.FC<IScreen> = ({ lastControlKeyPressed }) => {
  const [coordinates, setCoordinates] = useState([0, 1, 2, 3]);
  const [randomFoodPosition, setRandomFoodPosition] = useState<number>(
    generateRandomFoodPosition()
  );

  const changeSnakePosition = (coordinateNumber: number) => {
    const newCoordinates = [...coordinates];
    newCoordinates.shift();
    const coordinateToPush =
      newCoordinates[newCoordinates.length - 1] + coordinateNumber;
    newCoordinates.push(coordinateToPush);

    setCoordinates(newCoordinates);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSnakePosition(getDirection(lastControlKeyPressed));
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [coordinates, lastControlKeyPressed]);

  useEffect(() => {
    document.onkeydown = ({ key }) => {
      const direction = directions[key as ControlKey];

      if (direction) {
        changeSnakePosition(direction);
      }
    };
  }, [coordinates]);

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

            if (randomFoodPosition === index) {
              background = "#FD0E55";
            }

            return (
              <div
                key={index}
                style={{
                  background,
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Screen;
