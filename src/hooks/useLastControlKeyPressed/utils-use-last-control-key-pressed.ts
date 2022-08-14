import { useEffect, useMemo, useState } from "react";
import { KeyboardButtons } from "../../enums/KeyboardButtons";
import ControlKey from "../../models/ControlKey";

const controlKeys = [
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
] as const;

const isControlKey = (x: any): x is ControlKey => controlKeys.includes(x);

// Checks if key is right. Example: if we click 'right' button, and then click "left" button - we want snake to ignore it.
// Because it is immposible to change direction from right to left.
const isRightKey = (key: ControlKey, lastKeyPressed: ControlKey) => {
  const getKeysConflict = (keys: string[]): boolean => {
    const [a, b] = keys;

    if (
      (a === key && b === lastKeyPressed) ||
      (b === key && a === lastKeyPressed)
    ) {
      return true;
    }

    return false;
  };

  const horizontalKeys = [
    KeyboardButtons.ArrowLeft,
    KeyboardButtons.ArrowRight,
  ];
  const verticalKeys = [KeyboardButtons.ArrowDown, KeyboardButtons.ArrowUp];

  const horizontalKeysHaveConflict = getKeysConflict(horizontalKeys);
  const verticalKeysHaveConflict = getKeysConflict(verticalKeys);

  if (horizontalKeysHaveConflict || verticalKeysHaveConflict) {
    return false;
  }

  return true;
};

export { controlKeys, isControlKey, isRightKey };
