import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SnakeState, { defaultCoordinates } from "../../models/SnakeState";
import { Coordinates } from "../../models/SnakeState";

const initialState: SnakeState = {
  coordinates: defaultCoordinates,
  score: 0,
  snakeHasFailed: false,
};

const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    setCoordinatesAction(state, action: PayloadAction<Coordinates>) {
      state.coordinates = action.payload;
    },
    incrementScoreAction(state) {
      state.score++;
    },
    clearScoreAction(state) {
      state.score = 0;
    },

    setSnakeHasFailedAction(state, action: PayloadAction<boolean>) {
      state.snakeHasFailed = action.payload;
    },
  },
});

export const snakeReducer = snakeSlice.reducer;

export default snakeSlice;
