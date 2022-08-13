import React from "react";
import styles from "./MadeBy.module.css";

const MadeBy = () => {
  return (
    <div className={styles.madeByWrapper}>
      <div className={styles.madeBy}>Ilya Agarishev Inc.</div>
    </div>
  );
};

export default React.memo(MadeBy);
