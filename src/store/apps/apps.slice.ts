import {
  CaseReducer,
  PayloadAction,
  createSlice,
  createAction,
} from "@reduxjs/toolkit";
import { IApp } from "src/types/apps.types";
import { IAppsState, ListResponse } from "src/types/types";

const name = "apps";
const initialState = {
  loading: false,
  apps: [],
  page: {
    current: 1,
    total: 0,
    length: 25,
  },
} as IAppsState;

const getApps = createAction(`${name}/getApps`);

//TODO: calculate pages
// Case reducers
const setAppsReducer: CaseReducer<
  IAppsState,
  PayloadAction<ListResponse<IApp>>
> = (state, { payload }) => {
  return {
    ...state,
    apps: payload.appRows,
    page: {
      ...state.page,
      total: Math.round(payload.totalCount / state.page.length),
    },
  };
};

const appsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setApps: setAppsReducer,
  },
});

export const appsFeature = name;
export const appsActions = {
  ...appsSlice.actions,
  getApps,
};
export const appsReducer = appsSlice.reducer;
