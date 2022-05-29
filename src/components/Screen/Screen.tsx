import React, { useEffect, useMemo, useState } from "react";
import styles from "./Screen.module.css";

const Screen = () => {
  const [coordinates, setCoordinates] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCoordinates = [...coordinates];
      newCoordinates.shift();
      const coordinateToPush = newCoordinates[newCoordinates.length - 1] + 1;
      newCoordinates.push(coordinateToPush);

      setCoordinates(newCoordinates);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [coordinates]);

  return (
    <div className={styles.screenWrapper}>
      <div className={styles.battery} />
      <div className={styles.screen}>
        {Array(144)
          .fill("")
          .map((el, index) => {
            return (
              <div
                style={{
                  background: coordinates.some(
                    (cordinate) => cordinate === index
                  )
                    ? "#57D99C"
                    : "#3A3C39",
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Screen;
