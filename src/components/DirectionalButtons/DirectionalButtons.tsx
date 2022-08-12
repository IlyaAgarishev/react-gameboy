import keyboardEmulator from "../../classes/KeyboardEmulator";
import { KeyboardButtons } from "../../enums/KeyboardButtons";
import Button from "../Button/Button";
import styles from "./DirectionalButtons.module.css";

const DirectionalButtons = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.moveLeft} onClick={keyboardEmulator.moveLeft}>
        <Button keyboardButton={KeyboardButtons.ArrowLeft} content="←" />
      </div>
      <div className={styles.moveUp} onClick={keyboardEmulator.moveUp}>
        <Button keyboardButton={KeyboardButtons.ArrowUp} content="↑" />
      </div>
      <div className={styles.moveRight} onClick={keyboardEmulator.moveRight}>
        <Button keyboardButton={KeyboardButtons.ArrowRight} content="→" />
      </div>
      <div className={styles.moveDown} onClick={keyboardEmulator.moveDown}>
        <Button keyboardButton={KeyboardButtons.ArrowDown} content="↓" />
      </div>
    </div>
  );
};

export default DirectionalButtons;
