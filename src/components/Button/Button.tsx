import { useEffect, useState } from "react";
import useOnKeyDown from "../../hooks/useOneKeyDown";
import ControlKey from "../../models/ControlKey";
import styles from "./Button.module.css";

interface IDirectionalButton {
  keyboardButton: ControlKey;
  content: string;
}

const Button: React.FC<IDirectionalButton> = ({ keyboardButton, content }) => {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const keyDownData = useOnKeyDown({ requestedKeys: keyboardButton });

  // TODO: попробовать заменить на react-transition-group
  const click = () => {
    setButtonIsClicked(true);

    setTimeout(() => {
      setButtonIsClicked(false);
    }, 120);
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
      <span>{content}</span>
    </button>
  );
};

export default Button;
