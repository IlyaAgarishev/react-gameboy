import React from "react";
import styles from "./Gameboy.module.css";
import Screen from "../Screen";
import useLastControlKeyPressed from "../../hooks/useLastControlKeyPressed";

const Gameboy = () => {
  return (
    <div className={styles.gameboy}>
      <div className={styles.upperBlock}>
        <Screen />
      </div>
      <div className={styles.downBlock}></div>
    </div>
  );
};

export default Gameboy;
