import { useEffect, useState } from "react";
import useOnKeyDown from "../../hooks/useOnKeyDown";
import ControlKey from "../../models/ControlKey";
import styles from "./Button.module.css";

interface IDirectionalButton {
  keyboardButton: ControlKey;
}

const Button: React.FC<IDirectionalButton> = ({ keyboardButton }) => {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const keyDownData = useOnKeyDown();

  const click = () => {
    setButtonIsClicked(true);

    setTimeout(() => {
      setButtonIsClicked(false);
    }, 100);
  };

  useEffect(() => {
    if (keyDownData.key === keyboardButton) {
      click();
    }
  }, [keyDownData]);

  return (
    <button
      className={`${styles.controlButton} ${
        buttonIsClicked && styles.isActive
      }`}
    >
      <span />
    </button>
  );
};

export default Button;
