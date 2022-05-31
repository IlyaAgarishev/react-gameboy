import React, { useEffect, useMemo, useState } from "react";
import styles from "./Screen.module.css";

interface IScreen {
  coordinates: number[];
  randomFoodCoordinate: number;
}

const Screen: React.FC<IScreen> = ({ coordinates, randomFoodCoordinate }) => {
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
