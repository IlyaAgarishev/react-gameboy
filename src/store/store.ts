import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReduxLogger from "redux-logger";
import { isProductionMode } from "../constants";
import { snakeReducer } from "./reducers/snakeSlice";

const rootReducer = combineReducers({ snakeReducer });

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: isProductionMode ? [] : [ReduxLogger],
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
