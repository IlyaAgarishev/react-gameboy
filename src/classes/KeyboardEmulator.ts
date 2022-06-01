import { DirectionsEnum } from "../enums/DirectionsEnum";
import ControlKey from "../models/ControlKey";

class KeyboardEmulator {
  private pressKey = (key: ControlKey) => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key }));
  };

  moveLeft = () => {
    this.pressKey(DirectionsEnum.ArrowLeft);
  };

  moveRight = () => {
    this.pressKey(DirectionsEnum.ArrowRight);
  };

  moveUp = () => {
    this.pressKey(DirectionsEnum.ArrowUp);
  };

  moveDown = () => {
    this.pressKey(DirectionsEnum.ArrowDown);
  };
}

export default KeyboardEmulator;
