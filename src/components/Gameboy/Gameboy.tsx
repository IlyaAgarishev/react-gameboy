import React from "react";
import styles from "./Gameboy.module.css";
import Screen from "../Screen";
import useLastControlKeyPressed from "../../hooks/useLastControlKeyPressed";
import DirectionalButtons from "../DirectionalButtons";
import useSnake from "../../hooks/useSnake";

const Gameboy = () => {
  const { coordinates, randomFoodCoordinate } = useSnake();

  return (
    <div className={styles.gameboy}>
      <div className={styles.upperBlock}>
        <Screen
          coordinates={coordinates}
          randomFoodCoordinate={randomFoodCoordinate}
        />
      </div>
      <div className={styles.downBlock}>
        <DirectionalButtons />
      </div>
    </div>
  );
};

export default Gameboy;
