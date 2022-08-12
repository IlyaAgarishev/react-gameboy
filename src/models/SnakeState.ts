export type Coordinates = number[];

export const defaultCoordinates = [0, 1, 2, 3];

interface SnakeState {
  coordinates: Coordinates;
  score: number;
  snakeHasFailed: boolean;
}

export default SnakeState;
