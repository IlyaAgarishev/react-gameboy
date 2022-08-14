import { useEffect, useState } from "react";
import ControlKey from "../models/ControlKey";

interface IKey {
  key: string;
}

// TODO: Добавить "Space" и "g" в ControlKey
type RequestedKey = ControlKey | "Space" | "g";

interface Props {
  requestedKeys: RequestedKey | RequestedKey[];
}

const useOnKeyDown = ({ requestedKeys }: Props) => {
  const [state, setState] = useState<IKey>({ key: "" });

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (Array.isArray(requestedKeys)) {
      if (requestedKeys.some((el) => el === key)) {
        setState({ key });
      }
    } else {
      if (key === " " && requestedKeys === "Space") {
        // Обработка на Space
        setState({ key: "Space" });
      } else {
        if (requestedKeys === key) {
          setState({ key });
        }
      }
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

export default useOnKeyDown;
