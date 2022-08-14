import { KeyboardButtons } from "../../enums/KeyboardButtons";
import styles from "./SpaceButton.module.css";
import keyboardEmulator from "../../classes/KeyboardEmulator";
import Button from "../Button";
import ControlKey from "../../models/ControlKey";
import { useEffect } from "react";
import useOnKeyDown from "../../hooks/useOneKeyDown";
import snakeSlice from "../../store/reducers/snakeSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

const SpaceButton = () => {
  const keyDownData = useOnKeyDown({ requestedKeys: "Space" });
  const dispatch = useAppDispatch();
  const { setSnakeHasFailedAction } = snakeSlice.actions;

  useEffect(() => {
    if (keyDownData.key === "Space") {
      dispatch(setSnakeHasFailedAction(false));
    }
  }, [keyDownData]);

  return (
    <div className={styles.spaceButtonWrapper}>
      <div className={styles.spaceButton} onClick={keyboardEmulator.pressSpace}>
        {/* TODO: внести новый тип "Space" и убрать каст ! */}
        <Button
          keyboardButton={KeyboardButtons.Space as ControlKey}
          content="Space"
        />
      </div>
    </div>
  );
};

export default SpaceButton;
