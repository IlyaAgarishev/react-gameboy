import { useEffect, useState } from "react";
import { DirectionsEnum } from "../../enums/DirectionsEnum";
import ControlKey from "../../models/ControlKey";
import useOnKeyDown from "../useOnKeyDown";
import { isControlKey, isRightKey } from "./utils-use-last-control-key-pressed";

interface ReturnUseLastControlKeyPressed {
  lastControlKeyPressed: ControlKey;
  setDefaultLastControlKeyPressed: () => void;
}

const useLastControlKeyPressed = (): ReturnUseLastControlKeyPressed => {
  const defaulKey = DirectionsEnum.ArrowRight;

  const keyPressed = useOnKeyDown();
  const [lastControlKeyPressed, setLastControlKeyPressed] =
    useState<ControlKey>(defaulKey);

  useEffect(() => {
    if (
      isControlKey(keyPressed) &&
      isRightKey(keyPressed, lastControlKeyPressed)
    ) {
      setLastControlKeyPressed(keyPressed);
    }
  }, [keyPressed]);

  const setDefaultLastControlKeyPressed = () => {
    setLastControlKeyPressed(defaulKey);
  };

  return { lastControlKeyPressed, setDefaultLastControlKeyPressed };
};

export default useLastControlKeyPressed;
