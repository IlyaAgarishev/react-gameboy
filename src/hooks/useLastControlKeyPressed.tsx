import { useEffect, useMemo, useState } from "react";
import ControlKey from "../models/ControlKey";

const controlKeys = [
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
] as const;

const isControlKey = (x: any): x is ControlKey => controlKeys.includes(x);

const useLastControlKeyPressed = (): ControlKey => {
  const [state, setState] = useState<ControlKey>("ArrowRight");

  const onKeyDown = ({ key }: any) => {
    if (isControlKey(key)) {
      setState(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return state;
};

export default useLastControlKeyPressed;
