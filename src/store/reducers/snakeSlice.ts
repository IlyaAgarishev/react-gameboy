import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SnakeState, { defaultCoordinates } from "../../models/SnakeState";
import { Coordinates } from "../../models/SnakeState";

const initialState: SnakeState = {
  coordinates: defaultCoordinates,
};

const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    setCoordinatesAction(state, action: PayloadAction<Coordinates>) {
      state.coordinates = action.payload;
    },
  },
});

export const snakeReducer = snakeSlice.reducer;

export default snakeSlice;
