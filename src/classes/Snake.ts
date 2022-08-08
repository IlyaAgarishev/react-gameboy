import { Dispatch, SetStateAction } from "react";
import { isControlKey } from "../hooks/useLastControlKeyPressed/utils-use-last-control-key-pressed";
import ControlKey from "../models/ControlKey";
import Directions from "../models/Directions";
import { Coordinates } from "../models/SnakeState";

interface ISnake {
  coordinates: number[];
  setCoordinates: (coordinates: Coordinates) => void;
  lastControlKeyPressed: ControlKey;
}

class Snake {
  private setCoordinates: (coordinates: Coordinates) => void;
  private coordinates: number[];
  private lastControlKeyPressed: ControlKey;

  constructor({ coordinates, setCoordinates, lastControlKeyPressed }: ISnake) {
    this.coordinates = coordinates;
    this.setCoordinates = setCoordinates;
    this.lastControlKeyPressed = lastControlKeyPressed;
  }

  private directions: Directions = {
    ArrowUp: -12,
    ArrowDown: 12,
    ArrowRight: 1,
    ArrowLeft: -1,
  };

  getDirection = (key: ControlKey) => {
    return this.directions[key];
  };

  private changeSnakeCoordinates = (coordinateNumber: number) => {
    const newCoordinates = [...this.coordinates];
    newCoordinates.shift();
    const coordinateToPush =
      newCoordinates[newCoordinates.length - 1] + coordinateNumber;
    newCoordinates.push(coordinateToPush);

    this.setCoordinates(newCoordinates);
  };

  increaseTheSizeOfSnake = (coordinateNumber: number) => {
    const newCoordinates = [...this.coordinates];
    const coordinateToPush =
      newCoordinates[newCoordinates.length - 1] + coordinateNumber;
    newCoordinates.push(coordinateToPush);

    this.setCoordinates(newCoordinates);
  };

  changeSnakeDirection = (key: string) => {
    if (isControlKey(key)) {
      this.changeSnakeCoordinates(this.getDirection(key));
    }
  };

  moveTheSnakeByOneSquare = () => {
    this.changeSnakeCoordinates(this.getDirection(this.lastControlKeyPressed));
  };
}

export default Snake;
