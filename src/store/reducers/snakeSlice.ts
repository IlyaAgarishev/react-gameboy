import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnakeState {
  coordinates: number[];
}

const initialState: SnakeState = {
  coordinates: [0, 1, 2, 3],
};

const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {},
});

export const snakeReducer = snakeSlice.reducer;

export default snakeSlice;
