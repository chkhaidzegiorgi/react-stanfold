import { AppListRow } from "@/types/apps.types";
import { createSelector } from "@reduxjs/toolkit";
import { IAppsState, RootState } from "src/types/types";
import { appsFeature } from "./apps.slice";

export const appsSelector = (state: RootState): IAppsState =>
  state[appsFeature];

export const appsListSelector = createSelector(
  appsSelector,
  (coreState) => coreState.apps
);
export const pagerSelector = createSelector(
  appsSelector,
  (coreState) => coreState.page
);
