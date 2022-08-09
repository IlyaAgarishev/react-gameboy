import { useEffect, useState } from "react";

interface IKey {
  key: string;
}

const useOnKeyDown = () => {
  const [state, setState] = useState<IKey>({ key: "" });

  const onKeyDown = ({ key }: any) => {
    setState({ key });
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
