const controlKeys = [
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
] as const;

type ControlKey = typeof controlKeys[number];

export default ControlKey;
