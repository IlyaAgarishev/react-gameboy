import { useEffect, useMemo, useState } from "react";
import { DirectionsEnum } from "../../enums/DirectionsEnum";
import ControlKey from "../../models/ControlKey";

const controlKeys = [
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
] as const;

const isControlKey = (x: any): x is ControlKey => controlKeys.includes(x);

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

  const horizontalKeys = [DirectionsEnum.ArrowLeft, DirectionsEnum.ArrowRight];
  const verticalKeys = [DirectionsEnum.ArrowDown, DirectionsEnum.ArrowUp];

  const horizontalKeysHaveConflict = getKeysConflict(horizontalKeys);
  const verticalKeysHaveConflict = getKeysConflict(verticalKeys);

  if (horizontalKeysHaveConflict || verticalKeysHaveConflict) {
    return false;
  }

  return true;
};

export { controlKeys, isControlKey, isRightKey };
