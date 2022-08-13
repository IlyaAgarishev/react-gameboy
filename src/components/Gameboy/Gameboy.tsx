import styles from "./Gameboy.module.css";
import Screen from "../Screen";
import DirectionalButtons from "../DirectionalButtons";
import EnterButton from "../EnterButton";
import DiagonalLines from "../DiagonalLines";

const Gameboy = () => {
  return (
    <div className={styles.gameboy}>
      <div className={styles.upperBlock}>
        <Screen />
      </div>
      <div className={styles.downBlock}>
        <DirectionalButtons />
        <EnterButton />
        <DiagonalLines />
      </div>
    </div>
  );
};

export default Gameboy;
