import { Dispatch, SetStateAction } from "react";
import ControlKey from "../../models/ControlKey";

// TODO: Добавить "Space" и "g" в ControlKey
export type RequestedKey = ControlKey | "Space" | "g";

export interface IKey {
  key: string;
}

interface IProps {
  requestedKeys: RequestedKey | RequestedKey[];
  key: string;
  setState: Dispatch<SetStateAction<IKey>>;
}

// setRequestedKey - если keyboard KEY равен requestedKeys, то делаем setState. Данная логика нужная, чтобы лишний раз не сеттился стейт,
// дабы изебежать лишних ререндеров.
export const setRequestedKey = ({ requestedKeys, key, setState }: IProps) => {
  // Если массив передан, то сравниваем данные из массива
  if (Array.isArray(requestedKeys)) {
    if (requestedKeys.some((el) => el === key)) {
      setState({ key });
    }
  } else {
    // Обработка на Space
    if (key === " " && requestedKeys === "Space") {
      setState({ key: "Space" });
    } else {
      if (requestedKeys === key) {
        setState({ key });
      }
    }
  }
};
