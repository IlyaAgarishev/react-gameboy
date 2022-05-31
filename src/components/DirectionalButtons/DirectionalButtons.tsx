import { DirectionsEnum } from "../../enums/DirectionsEnum";
import ControlKey from "../../models/ControlKey";
import DirectionalButton from "../DirectionalButton/DirectionalButton";
import styles from "./DirectionalButtons.module.css";

const pressKey = (key: ControlKey) => {
  document.dispatchEvent(new KeyboardEvent("keydown", { key }));
};

const DirectionalButtons = () => {
  const moveLeft = () => {
    pressKey(DirectionsEnum.ArrowLeft);
  };

  const moveRight = () => {
    pressKey(DirectionsEnum.ArrowRight);
  };

  const moveUp = () => {
    pressKey(DirectionsEnum.ArrowUp);
  };

  const moveDown = () => {
    pressKey(DirectionsEnum.ArrowDown);
  };

  return (
    <div className={styles.controls}>
      <div className={styles.moveLeft} onClick={moveLeft}>
        <DirectionalButton direction={DirectionsEnum.ArrowLeft} />
      </div>
      <div className={styles.moveUp} onClick={moveUp}>
        <DirectionalButton direction={DirectionsEnum.ArrowUp} />
      </div>
      <div className={styles.moveRight} onClick={moveRight}>
        <DirectionalButton direction={DirectionsEnum.ArrowRight} />
      </div>
      <div className={styles.moveDown} onClick={moveDown}>
        <DirectionalButton direction={DirectionsEnum.ArrowDown} />
      </div>
    </div>
  );
};

export default DirectionalButtons;
