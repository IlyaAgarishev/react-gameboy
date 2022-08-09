import keyboardEmulator from "../../classes/KeyboardEmulator";
import { KeyboardButtons } from "../../enums/KeyboardButtons";
import Button from "../Button/Button";
import styles from "./DirectionalButtons.module.css";

const DirectionalButtons = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.moveLeft} onClick={keyboardEmulator.moveLeft}>
        <Button keyboardButton={KeyboardButtons.ArrowLeft} />
      </div>
      <div className={styles.moveUp} onClick={keyboardEmulator.moveUp}>
        <Button keyboardButton={KeyboardButtons.ArrowUp} />
      </div>
      <div className={styles.moveRight} onClick={keyboardEmulator.moveRight}>
        <Button keyboardButton={KeyboardButtons.ArrowRight} />
      </div>
      <div className={styles.moveDown} onClick={keyboardEmulator.moveDown}>
        <Button keyboardButton={KeyboardButtons.ArrowDown} />
      </div>
    </div>
  );
};

export default DirectionalButtons;
