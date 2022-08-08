import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { snakeReducer } from "./reducers/snakeSlice";

const rootReducer = combineReducers({ snakeReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
