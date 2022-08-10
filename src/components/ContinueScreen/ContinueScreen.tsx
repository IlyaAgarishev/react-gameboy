import styles from "./ContinueScreen.module.css";

const ContinueScreen = () => {
  return (
    <div className={styles.continueScreen}>
      <div>Your score is 0</div>
      <div>
        Press <span className={styles.spaceButtonOnScreen}>"Space"</span> to
        continue
      </div>
    </div>
  );
};

export default ContinueScreen;
