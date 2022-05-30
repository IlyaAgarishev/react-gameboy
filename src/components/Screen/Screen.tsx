import React, { useEffect, useMemo, useState } from "react";
import ControlKey from "../../models/ControlKey";
import Directions from "../../models/Directions";
import styles from "./Screen.module.css";
import { generateRandomFoodPosition } from "./screen-utils";
import { isControlKey } from "../../hooks/useLastControlKeyPressed/utils-hook_useLastControlKeyPressed";
import useSnake from "../../hooks/useSnake";

const Screen: React.FC = () => {
  const { coordinates } = useSnake();

  const [randomFoodPosition, setRandomFoodPosition] = useState<number>(
    generateRandomFoodPosition()
  );

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
