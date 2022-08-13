import React from "react";
import styles from "./DiagonalLines.module.css";

const DiagonalLines = () => {
  return (
    <div className={styles.diagonalLines}>
      {[...Array(5)].map(() => (
        <div />
      ))}
    </div>
  );
};

export default React.memo(DiagonalLines);
