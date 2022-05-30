import { useEffect, useMemo, useState } from "react";
import ControlKey from "../../models/ControlKey";

const controlKeys = [
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
] as const;

const isControlKey = (x: any): x is ControlKey => controlKeys.includes(x);

export { controlKeys, isControlKey };
