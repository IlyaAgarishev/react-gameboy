import { useEffect, useState } from "react";
import { IKey, RequestedKey, setRequestedKey } from "./utils-use-on-key-down";

interface IProps {
  requestedKeys: RequestedKey | RequestedKey[];
}

const useOnKeyDown = ({ requestedKeys }: IProps) => {
  const [state, setState] = useState<IKey>({ key: "" });

  const onKeyDown = ({ key }: KeyboardEvent) => {
    setRequestedKey({ requestedKeys, key, setState });
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
