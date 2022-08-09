import { KeyboardButtons } from "../../enums/KeyboardButtons";
import styles from "./EnterButton.module.css";
import keyboardEmulator from "../../classes/KeyboardEmulator";
import Button from "../Button";
import ControlKey from "../../models/ControlKey";

const EnterButton = () => {
  return (
    <div className={styles.enterButton} onClick={keyboardEmulator.pressEnter}>
      {/* TODO: внести новый тип "Enter" и убрать каст ! */}
      <Button keyboardButton={KeyboardButtons.Enter as ControlKey} />
    </div>
  );
};

export default EnterButton;
