import { useEffect, useMemo, useState } from "react";
import ControlKey from "../../models/ControlKey";
import { isControlKey } from "./utils-hook_useLastControlKeyPressed";

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
