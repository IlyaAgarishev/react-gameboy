import { useEffect, useState } from "react";

const useOnKeyDown = () => {
  const [state, setState] = useState<any>("");

  const onKeyDown = ({ key }: any) => {
    setState(key);
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
