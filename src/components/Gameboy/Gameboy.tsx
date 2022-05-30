import React from "react";
import styles from "./Gameboy.module.css";
import Screen from "../Screen";
import useLastControlKeyPressed from "../../hooks/useLastControlKeyPressed";

const Gameboy = () => {
  const lastControlKeyPressed = useLastControlKeyPressed();

  return (
    <div className={styles.gameboy}>
      <div className={styles.upperBlock}>
        <Screen lastControlKeyPressed={lastControlKeyPressed} />
      </div>
      <div className={styles.downBlock}></div>
    </div>
  );
};

export default Gameboy;
