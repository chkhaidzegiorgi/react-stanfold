import { createSelector } from "@reduxjs/toolkit";

import { coreFeature } from "./core.slice";

export const coreSelector = (state: RootState): ICoreState =>
  state[coreFeature];

export const tokenSelector = createSelector(
  coreSelector,
  (coreState) => coreState.token
);
