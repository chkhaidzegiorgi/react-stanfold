import {
  CaseReducer,
  PayloadAction,
  createSlice,
  createAction,
} from "@reduxjs/toolkit";

const name = "core";
const initialState = {} as ICoreState;

const setToken = createAction(`${name}/setToken`);
const setProviders = createAction(`${name}/setProviders`);

// Case reducers
const updateTokenReducer: CaseReducer<ICoreState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  return {
    ...state,
    token: payload,
  };
};

const updateProvidersReducer: CaseReducer<
  ICoreState,
  PayloadAction<string[]>
> = (state, { payload }) => {
  return {
    ...state,
    providers: payload,
  };
};

const coreSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateToken: updateTokenReducer,
    updateProviders: updateProvidersReducer,
  },
});

export const coreFeature = name;
export const coreActions = {
  ...coreSlice.actions,
  setToken,
  setProviders,
};
export const coreReducer = coreSlice.reducer;
