import keyboardEmulator from "../../classes/KeyboardEmulator";
import { DirectionsEnum } from "../../enums/DirectionsEnum";
import DirectionalButton from "../DirectionalButton/DirectionalButton";
import styles from "./DirectionalButtons.module.css";

const DirectionalButtons = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.moveLeft} onClick={keyboardEmulator.moveLeft}>
        <DirectionalButton direction={DirectionsEnum.ArrowLeft} />
      </div>
      <div className={styles.moveUp} onClick={keyboardEmulator.moveUp}>
        <DirectionalButton direction={DirectionsEnum.ArrowUp} />
      </div>
      <div className={styles.moveRight} onClick={keyboardEmulator.moveRight}>
        <DirectionalButton direction={DirectionsEnum.ArrowRight} />
      </div>
      <div className={styles.moveDown} onClick={keyboardEmulator.moveDown}>
        <DirectionalButton direction={DirectionsEnum.ArrowDown} />
      </div>
    </div>
  );
};

export default DirectionalButtons;
