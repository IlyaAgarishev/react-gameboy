import { useEffect, useState } from "react";
import ControlKey from "../../models/ControlKey";
import styles from "./Button.module.css";

interface IDirectionalButton {
  keyboardButton: ControlKey;
}

const Button: React.FC<IDirectionalButton> = ({ keyboardButton }) => {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const click = () => {
    setButtonIsClicked(true);

    setTimeout(() => {
      setButtonIsClicked(false);
    }, 100);
  };

  // TODO: fix useOnKeyDown, then use useOnKeyDown
  const onKeyDown = ({ key }: any) => {
    if (key === keyboardButton) {
      click();
    }
  };

  // TODO: fix useOnKeyDown, then use useOnKeyDown
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <button
      className={`${styles.dicrectionalButton} ${
        buttonIsClicked && styles.isActive
      }`}
    >
      <span />
    </button>
  );
};

export default Button;
