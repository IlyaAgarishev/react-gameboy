import { useEffect, useState } from "react";
import { KeyboardButtons } from "../../../enums/KeyboardButtons";
import ControlKey from "../../../models/ControlKey";
import useOnKeyDown from "../../useOneKeyDown";
import {
  controlKeys,
  isControlKey,
  isRightKey,
} from "./utils-use-last-control-key-pressed";

interface ReturnUseLastControlKeyPressed {
  lastControlKeyPressed: ControlKey;
  setDefaultLastControlKeyPressed: () => void;
}

const useLastControlKeyPressed = (): ReturnUseLastControlKeyPressed => {
  const defaulKey = KeyboardButtons.ArrowRight;

  const keyDownData = useOnKeyDown({ requestedKeys: [...controlKeys] });
  const [lastControlKeyPressed, setLastControlKeyPressed] =
    useState<ControlKey>(defaulKey);

  useEffect(() => {
    const { key } = keyDownData;

    if (isControlKey(key) && isRightKey(key, lastControlKeyPressed)) {
      setLastControlKeyPressed(key);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyDownData]);

  const setDefaultLastControlKeyPressed = () => {
    setLastControlKeyPressed(defaulKey);
  };

  return { lastControlKeyPressed, setDefaultLastControlKeyPressed };
};

export default useLastControlKeyPressed;
