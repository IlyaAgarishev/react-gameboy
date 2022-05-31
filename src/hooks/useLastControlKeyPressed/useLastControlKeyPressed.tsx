import { useEffect, useMemo, useState } from "react";
import ControlKey from "../../models/ControlKey";
import useOnKeyDown from "../useOnKeyDown";
import { isControlKey } from "./utils-hook_useLastControlKeyPressed";

const useLastControlKeyPressed = (): ControlKey => {
  const keyPressed = useOnKeyDown();
  const [controlKeyPressed, setControlKeyPressed] =
    useState<ControlKey>("ArrowRight");

  useEffect(() => {
    if (isControlKey(keyPressed)) {
      setControlKeyPressed(keyPressed);
    }
  }, [keyPressed]);

  return controlKeyPressed;
};

export default useLastControlKeyPressed;
