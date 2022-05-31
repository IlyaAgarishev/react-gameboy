import { memo } from "react";
import DirectionalButton from "../DirectionalButton/DirectionalButton";
import styles from "./DirectionalButtons.module.css";

enum Directions {
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  ArrowRight = "ArrowRight",
  ArrowLeft = "ArrowLeft",
}

const DirectionalButtons = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.moveLeft}>
        <DirectionalButton direction={Directions.ArrowLeft} />
      </div>
      <div className={styles.moveUp}>
        <DirectionalButton direction={Directions.ArrowUp} />
      </div>
      <div className={styles.moveRight}>
        <DirectionalButton direction={Directions.ArrowRight} />
      </div>
      <div className={styles.moveDown}>
        <DirectionalButton direction={Directions.ArrowDown} />
      </div>
    </div>
  );
};

export default memo(DirectionalButtons);
