import { KeyboardButtons } from "../enums/KeyboardButtons";
import ControlKey from "../models/ControlKey";

class KeyboardEmulator {
  private pressKey = (key: ControlKey) => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key }));
  };

  moveLeft = () => {
    this.pressKey(KeyboardButtons.ArrowLeft);
  };

  moveRight = () => {
    this.pressKey(KeyboardButtons.ArrowRight);
  };

  moveUp = () => {
    this.pressKey(KeyboardButtons.ArrowUp);
  };

  moveDown = () => {
    this.pressKey(KeyboardButtons.ArrowDown);
  };

  pressEnter = () => {
    // TODO: внести новый тип "Space" и убрать каст !
    this.pressKey(KeyboardButtons.Space as ControlKey);
  };
}

export default new KeyboardEmulator();
