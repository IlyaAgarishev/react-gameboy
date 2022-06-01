import KeyboardEmulator from "../../classes/KeyboardEmulator";
import { DirectionsEnum } from "../../enums/DirectionsEnum";
import ControlKey from "../../models/ControlKey";
import DirectionalButton from "../DirectionalButton/DirectionalButton";
import styles from "./DirectionalButtons.module.css";

const DirectionalButtons = () => {
  const keyboard = new KeyboardEmulator();

  return (
    <div className={styles.controls}>
      <div className={styles.moveLeft} onClick={keyboard.moveLeft}>
        <DirectionalButton direction={DirectionsEnum.ArrowLeft} />
      </div>
      <div className={styles.moveUp} onClick={keyboard.moveUp}>
        <DirectionalButton direction={DirectionsEnum.ArrowUp} />
      </div>
      <div className={styles.moveRight} onClick={keyboard.moveRight}>
        <DirectionalButton direction={DirectionsEnum.ArrowRight} />
      </div>
      <div className={styles.moveDown} onClick={keyboard.moveDown}>
        <DirectionalButton direction={DirectionsEnum.ArrowDown} />
      </div>
    </div>
  );
};

export default DirectionalButtons;
