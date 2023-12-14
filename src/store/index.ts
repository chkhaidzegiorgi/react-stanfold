import { Action, configureStore, Dispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { coreEpics, coreFeature, coreReducer } from "./core";

// Configure middlewares
const rootEpic = combineEpics(...coreEpics);
const epicMiddleware = createEpicMiddleware();

// Configure store
const reducers = {
  [coreFeature]: coreReducer,
};

// Export
type AppDispatch = Dispatch<Action>;
export const mountStore = () => {
  const storeInstance = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
  });
  epicMiddleware.run(rootEpic);

  return storeInstance;
};
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
